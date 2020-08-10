import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import fs from 'fs';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    minHeight: 300,
    minWidth: 300,
    transparent: true,
    frame: false,
    thickFrame: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app
  .on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    }
  });

app.allowRendererProcessReuse = true;

const filePath = process.argv[1];
const title = filePath.split('\\')[filePath.split('\\').length - 1];

ipcMain.on('get-file', (event, arg) => {
  fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
      console.log(err);
    } else {
      event.reply('set-file', { text, title });
    }
  });
});

ipcMain.on('save-file', (event, text) => {
  fs.writeFile(filePath, text, 'utf-8', (err) => {
    if (err) {
      event.reply('set-file-error');
    } else {
      event.reply('set-file-success');
    }
  });
});

ipcMain.on('new-window', () => {
  createWindow();
});

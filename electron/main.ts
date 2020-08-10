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

ipcMain.on('asynchronous-message', (event, arg) => {
  const filePath = process.argv[1];
  const title = filePath.split('\\')[filePath.split('\\').length - 1];
  fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
      console.log(err);
    } else {
      event.reply('asynchronous-reply', { text, title });
    }
  });
});

ipcMain.on('asynchronous-message-save', (event, arg) => {
  console.log('saved');
});

import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { ipcRenderer } from 'electron';
import TextEditor from './components/TextEditor';
import Header from './components/Header';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  const [data, setData] = useState('teste');

  useEffect(() => {
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg); // prints "pong"
      setData(arg);
    });
    ipcRenderer.send('asynchronous-message', 'ping');
  }, [setData]);

  const handleSave = () => {
    ipcRenderer.send('asynchronous-message-save');
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <TextEditor value={data} onChange={setData} />
    </>
  );
};

render(<App />, mainElement);

import React, { useEffect, useState, useCallback } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { ipcRenderer } from 'electron';
import TextEditor from './components/TextEditor';
import Header from './components/Header';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [wasEdited, setWasEdited] = useState(false);

  useEffect(() => {
    ipcRenderer.on('set-file', (event, fileData) => {
      setData(fileData.text);
      setTitle(fileData.title);
    });
    ipcRenderer.send('get-file');
  }, [setData, setTitle]);

  const handleTextChange = useCallback(
    (text: string) => {
      setData(text);
      setWasEdited(true);
    },
    [setData]
  );

  const handleSave = useCallback(() => {
    ipcRenderer.send('save-file', data);
  }, [data]);

  return (
    <>
      <GlobalStyle />
      <Header title={title} handleSave={handleSave} />
      <TextEditor value={data} onChange={handleTextChange} />
    </>
  );
};

render(<App />, mainElement);

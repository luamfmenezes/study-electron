import React, { useCallback } from 'react';
import { Container } from './styles';
import { ipcRenderer } from 'electron';
import { FiSave } from 'react-icons/fi';
import { MdFolderOpen } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';

interface IProps {
  show: boolean;
  handleSave: Function;
}

const ActionContainer: React.FC<IProps> = ({ show, handleSave }) => {
  const openNewWindow = () => ipcRenderer.send('new-window');

  return (
    <Container show={show ? 'true' : 'false'}>
      <button onClick={openNewWindow}>
        <IoMdAdd size={20} color="#7159ca" />
        <p>NEW WINDOW</p>
      </button>
      <button>
        <MdFolderOpen size={20} color="#7159ca" />
        <p>OPEN</p>
      </button>
      <button onClick={() => handleSave()}>
        <FiSave size={20} color="#7159ca" />
        <p>SAVE</p>
      </button>
    </Container>
  );
};

export default ActionContainer;

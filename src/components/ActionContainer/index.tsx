import React, { useCallback } from 'react';
import { Container } from './styles';

import { FiSave } from 'react-icons/fi';
import { MdFolderOpen } from 'react-icons/md';

interface IProps {
  show: boolean;
}

const ActionContainer: React.FC<IProps> = ({ show }) => {
  return (
    <Container show={show ? 'true' : 'false'}>
      <button>
        <FiSave size={20} color="#7159ca" />
        <p>SAVE</p>
      </button>
      <button>
        <FiSave size={20} color="#7159ca" />
        <p>SAVE WITH</p>
      </button>
      <button>
        <MdFolderOpen size={20} color="#7159ca" />
        <p>OPEN</p>
      </button>
    </Container>
  );
};

export default ActionContainer;

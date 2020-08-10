import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { remote } from 'electron';
import { Container, Title, Controllers } from './styles';
import ActionContainer from '../ActionContainer';

import {
  FiMaximize,
  FiMinimize,
  FiMoreHorizontal,
  FiMinus,
} from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlinePoweroff } from 'react-icons/ai';

interface IProps {
  title: string | undefined;
  handleSave: Function;
}

const Header: React.FC<IProps> = ({ title, handleSave }) => {
  const [show, setShow] = useState(false);

  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow();
    window.minimize();
  }, []);

  const handleClose = useCallback(() => {
    const window = remote.getCurrentWindow();
    window.close();
  }, []);

  return (
    <Container>
      <ActionContainer show={show} handleSave={handleSave} />
      <button onClick={() => setShow((oldShow) => !oldShow)}>
        {!show ? (
          <FiMoreHorizontal color="#7159ca" size={16} />
        ) : (
          <IoIosArrowBack color="#7159ca" size={16} />
        )}
      </button>
      <Title>{title || 'Electron Note'}</Title>
      <Controllers>
        <button onClick={handleMinimize}>
          <FiMinus color="#7159ca" size={16} />
        </button>
        <button onClick={handleClose}>
          <AiOutlinePoweroff color="#7159ca" size={16} />
        </button>
      </Controllers>
    </Container>
  );
};

export default Header;

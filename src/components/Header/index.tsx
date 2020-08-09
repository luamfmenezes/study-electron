import React, { useState } from 'react';
import { View } from 'react-native';

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

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <ActionContainer show={show} />
      <button onClick={() => setShow((oldShow) => !oldShow)}>
        {!show ? (
          <FiMoreHorizontal color="#7159ca" size={16} />
        ) : (
          <IoIosArrowBack color="#7159ca" size={16} />
        )}
      </button>
      <Title>ElectroNote</Title>
      <Controllers>
        <button>
          <FiMinus color="#7159ca" size={16} />
        </button>
        <button>
          <FiMaximize color="#7159ca" size={16} />
        </button>
        <button>
          <AiOutlinePoweroff color="#7159ca" size={16} />
        </button>
      </Controllers>
    </Container>
  );
};

export default Header;

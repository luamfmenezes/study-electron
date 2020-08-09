import React, { ChangeEvent } from 'react';

import { Container } from './styles';

interface IProps {
  value: string;
  onChange: Function;
}

const TextEditor: React.FC<IProps> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return <Container value={value} onChange={handleChange} />;
};

export default TextEditor;

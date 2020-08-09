import styled, { keyframes } from 'styled-components';

export const Container = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 16px;
  background: transparent;
  color: #ddf;
  font-family: Arial, Helvetica, sans-serif;
  resize: none;
  line-height: 20px;
  &:focus {
    outline: 0;
  }
`;

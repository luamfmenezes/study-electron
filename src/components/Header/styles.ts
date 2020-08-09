import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 35px;
  background: red;
  -webkit-app-region: drag;
  border-radius: 0px;
  /* background: rgba(0, 0, 0, 0.3); */
  background: #0d0a16;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
    transition: 0.2s;
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Title = styled.div`
  font-size: 12px;
  color: #7159ca;
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 8px;
  }
`;

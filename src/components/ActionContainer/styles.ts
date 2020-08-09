import styled from 'styled-components';

interface ContainerProps {
  show: string;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 2;
  background: #0d0a16;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  top: 40px;
  border: 0;
  transform: ${(props) =>
    props.show === 'true' ? 'translateX(0px)' : 'translateX(-200px)'};
  transition: 0.5s;
  button {
    border: 0;
    p {
      margin-left: 8px;
      font-size: 10px;
      color: #7159c1;
      font-weight: bold;
    }
    margin: 8px;
  }
`;

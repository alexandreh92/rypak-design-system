import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  border: 1px solid black;

  background-color: white;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

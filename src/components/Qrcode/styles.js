import styled from 'styled-components';

export const Container = styled.div`
  background: #405364;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -40px;

  width: 240px;
  height: 240px;

  img {
    width: 200px;
    height: 200px;
  }
`;

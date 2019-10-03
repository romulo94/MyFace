import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  width: 100%;
`;

export const Box = styled.div`
  background: transparent;

  border-radius: 10px;
  border: 1px solid #efefef;
  width: 75%;
  height: 65px;
`;

export const Point = styled.div`
  left: 8%;
  position: fixed;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: #efefef;
`;

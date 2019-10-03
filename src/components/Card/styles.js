import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  width: 100%;
`;

export const Box = styled.div`
  background: transparent;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #efefef;
  width: 75%;
  height: 65px;
  position: relative;
  ::before {
    left: -10%;
    display: block;
    position: absolute;
    top: 50%;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fefefe;

    transform: translateY(-50%);
  }
`;

export const Point = styled.div`
  left: 8%;
  position: fixed;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: #efefef;
`;

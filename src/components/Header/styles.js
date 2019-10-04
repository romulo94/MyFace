import styled from 'styled-components';

export const Container = styled.div`
  display: -webkit-box;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #80daf2;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  color: white;
  font-size: 12px;

  span:first-of-type {
    color: white;
    font-weight: 700;
    font-size: 18px;
  }
`;

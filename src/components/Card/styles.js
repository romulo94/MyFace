import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => (props.data ? '#ffffff' : 'transparent')};
  margin-bottom: 15px;
  border-radius: 10px;
  border: ${props => (props.data ? '' : ' 1px solid #efefef')};
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
    background: #fffdfd5c;

    transform: translateY(-50%);
  }
  border-radius: 10px;
  box-shadow: ${props =>
    props.data ? 'rgba(0, 0, 0, 0.2) -1px 2px 10px 2px' : ''};
`;

export const Avatar = styled.img`
  border-radius: 10px 0 0 10px;
  height: 100%;
`;
export const Info = styled.div`
  margin-bottom: 4px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-left: 10px;

  color: #aeaead;
  font-size: 12px;

  span:first-of-type {
    color: #909090;
    font-weight: 700;
  }
`;
export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70%;
  border-left: 1px solid gray;
`;

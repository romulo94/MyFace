import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: 90%;
  height: 200px;
  background: #405364;
  color: #fff;

  border-radius: 15px;
  padding: 30px 0 10px 0;
`;

export const ContainerPhone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 75%;
  }
`;
export const SVGGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const Email = styled.span``;

export const Phone = styled.div`
  display: flex;
  width: 50%;
  padding: 20px;
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background: gray;
`;

import React from 'react';

import { Container, Content } from './styles';

import ImageQrcode from '~/assets/images/qrcode.png';

export default function Qrcode() {
  return (
    <Container>
      <Content>
        <img src={ImageQrcode} alt="" />
      </Content>
    </Container>
  );
}

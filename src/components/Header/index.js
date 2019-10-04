import React from 'react';

import { Container, Avatar, Info, Content } from './styles';

export default function Header({ image, name, role }) {
  console.log('image', image);
  return (
    <Container>
      <Content>
        <Avatar src={image} alt="avatar-show" />
        <Info>
          <span>{name}</span>
          <span>{role}</span>
        </Info>
      </Content>
    </Container>
  );
}

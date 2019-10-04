import React from 'react';
import PropTypes from 'prop-types';
import { Container, Avatar, Info, Content } from './styles';

export default function Header({ image, name, role }) {
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

Header.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

import React from 'react';

import Group from '~/assets/images/group';
import LineGroup from '~/assets/images/linegroup';

import {
  Container,
  Email,
  ContainerPhone,
  Phone,
  SVGGroup,
  Divider,
} from './styles';

export default function InfoCard({ email, phone }) {
  return (
    <Container>
      <ContainerPhone>
        <SVGGroup>
          <Group />
        </SVGGroup>
        <Divider />
        <Phone>{phone}</Phone>
      </ContainerPhone>

      <Email>{email}</Email>

      <LineGroup />
    </Container>
  );
}

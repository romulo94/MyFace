import React, { useMemo } from 'react';
import { Container } from './styles';
import info from '~/server/info';
import history from '~/config/history';

export default function Show() {
  const contact = useMemo(
    () =>
      info.find(el => el.id === history.location.pathname.split('/show/')[1]),

    []
  );

  return (
    <Container>
      <h1>{contact.name}</h1>
      <h1>{contact.email}</h1>
      <h1>{contact.phone}</h1>
    </Container>
  );
}

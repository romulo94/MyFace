import React, { useMemo } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Container, GoBack } from './styles';
import info from '~/server/info';
import history from '~/services/history';
import InfoCard from '~/components/InfoCard';
import Qrcode from '~/components/Qrcode';
import Header from '~/components/Header';

export default function Show() {
  const contact = useMemo(
    () =>
      info.find(el => el.id === history.location.pathname.split('/show/')[1]),
    []
  );

  return (
    <Container>
      <GoBack onClick={() => history.push('/')}>
        <FaChevronLeft color="white" />
      </GoBack>
      <Header image={contact.image} name={contact.name} role={contact.role} />
      <InfoCard
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
        role={contact.role}
      />
      <Qrcode />
    </Container>
  );
}

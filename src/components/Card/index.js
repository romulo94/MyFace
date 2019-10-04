import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Box, Avatar, Info, Plus } from './styles';

export default function Card({ contacts = [{}, {}, {}, {}, {}] }) {
  return (
    <Container>
      {contacts.map(contact => (
        <Box key={Math.random()} data={contact.id}>
          {contact.id && (
            <>
              <Avatar src={contact.image} />
              <Info>
                <span>{contact.name}</span>
                <span>{contact.role}</span>
              </Info>
              <Plus>
                <FaPlus color="gray" />
              </Plus>
            </>
          )}
        </Box>
      ))}
    </Container>
  );
}

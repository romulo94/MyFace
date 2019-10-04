import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Box, Avatar, Info, Plus } from './styles';
import history from '~/services/history';

export default function Card({ contacts }) {
  return (
    <Container>
      {contacts.map(contact => (
        <Box
          key={Math.random()}
          data={contact.id}
          onClick={() => {
            if (contact.id) {
              history.push(`show/${contact.id}`);
            }
          }}
        >
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

Card.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
Card.defaultProps = {
  contacts: [{}, {}, {}, {}, {}],
};

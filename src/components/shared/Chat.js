import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Div = styled.div`
  border: 3px solid red;
`;

export default ({ messages }) => (
  <Div>
    {
      messages.length > 0 && messages.map((msg) => (
        <Message
          message={msg.message}
          user={msg.user}
          key={msg.id}
        />
      ))
  }
  </Div>
);

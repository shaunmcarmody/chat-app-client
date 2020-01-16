import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Div = styled.div`
  height: calc(100vh - 80px);
  padding: 20px;
`;

export default ({ messages, userId }) => (
  <Div>
    {
      messages.length > 0 && messages.map((msg) => (
        <Message
          message={msg.message}
          user={msg.user}
          key={msg.id}
          sent={msg.userId === userId ? true : false}
        />
      ))
  }
  </Div>
);

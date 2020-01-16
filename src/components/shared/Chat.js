import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Div = styled.div`
  border: 3px solid red;
`;

export default ({ messages }) => (
  <Div>
    {
      messages.map((message) => <Message message={message} key={message.id} />)
    }
  </Div>
);

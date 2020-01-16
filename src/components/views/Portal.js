import React from 'react';
import styled from 'styled-components';
import { Chat, TextField } from '../shared';

const ChatBox = styled.div`
  border-top: 3px solid #3f51b5;
  padding: 20px 10px;
  postion: absolute;
`;

export default ({ messages, submit, userId }) => (
  <>
      <Chat
        messages={messages}
        userId={userId}
      />
      <ChatBox>
      <TextField
          placeholder="Chat to the group..."
          submit={submit}
        />
      </ChatBox>
      
  </>
)
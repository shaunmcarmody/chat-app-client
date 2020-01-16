import React from 'react';
import { Chat, TextField } from '../shared';

export default ({ messages, submit }) => (
  <>
      <Chat
        messages={messages}
      />
      <TextField
        submit={submit}
      />
  </>
)
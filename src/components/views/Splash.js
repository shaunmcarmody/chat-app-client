import React from 'react';
import { TextField } from '../shared';

export default ({ submit }) => (
  <>
    <h1>Enter your name</h1>
    <TextField
      submit={submit}
    />
  </>
);


import React from 'react';
import styled from 'styled-components';
import { TextField } from '../shared';

const Div = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 80%;
`;

export default ({ submit }) => (
  <Div>
    <TextField
      placeholder="Enter name to join chat"
      submit={submit}
    />
  </Div>
);


import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 3px solid blue;
`;

export default ({ message, user }) => {
  return (
    <Div>
      <h2>{user}</h2>
      <p>{message}</p>
    </Div>
  )
}

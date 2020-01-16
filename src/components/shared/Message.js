import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 3px solid blue;
`;

export default ({ message }) => {
  const { name } = message.user
  const { text } = message
  return (
    <Div>
      <h2>{name}</h2>
      <p>{text}</p>
    </Div>
  )
}

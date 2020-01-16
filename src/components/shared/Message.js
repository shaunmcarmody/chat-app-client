import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${props => props.sent ? '#3f51b5' : '#E0E1E9'};
  border-radius: 8px;
  float: ${props => props.sent ? 'right' : 'left'};
  color: ${props => props.sent ? 'white' : 'left'};
  margin-bottom: 10px;
  padding: 8px;
  width: 70%;
`;

const Title = styled.h1`
  opacity: 0.5;
  font-size: 0.8rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

export default ({ message, user, sent }) => {
  return (
    <Div sent={sent}>
      <Title>{user}</Title>
      <Text>{message}</Text>
    </Div>
  )
}

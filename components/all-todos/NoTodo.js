import React from 'react';
import styled from 'styled-components/native';

const NoTodo = () => {
  return (
    <Container>
      <Message>Your To-Do list is empty</Message>
    </Container>
  );
};

export default NoTodo;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Message = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
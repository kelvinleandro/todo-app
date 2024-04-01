import React from 'react';
import styled from 'styled-components/native';

const NoTodo: React.FC = () => {
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
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: bold;
`;
import React from 'react';
import styled from 'styled-components/native';
import TodoItem from './TodoItem';

const TodoList = ({ todosData }) => {
  return (
    <StyledScrollView contentContainerStyle={{ alignItems: 'center' }}>
      {todosData.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.title} />
      ))}
    </StyledScrollView>
  );
};

export default TodoList;

const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: props => props.contentContainerStyle,
})``;
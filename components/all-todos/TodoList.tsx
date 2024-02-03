import React from 'react';
// import styled from 'styled-components/native';
import TodoItem from './TodoItem';
import { ScrollView } from 'react-native';

interface Todo {
  id: string;
  title: string;
}

interface TodoListProps {
  todosData: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todosData }) => {
  return (
    <ScrollView>
      {todosData.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.title} />
      ))}
    </ScrollView>
  );
};

export default TodoList;

// const StyledScrollView = styled.ScrollView.attrs({
//   contentContainerStyle: (props) => props.contentContainerStyle,
// })``;
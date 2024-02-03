import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import { createTable, readAllTodos } from "../util/database";
import NoTodo from "../components/all-todos/NoTodo";
import TodoList from "../components/all-todos/TodoList";
import CreateButton from "../components/UI/CreateButton";
import { NavigationProp } from "@react-navigation/native";

interface AllTodosProps {
  navigation: NavigationProp<any>;
}

interface Todo {
  id: string;
  title: string;
}

const AllTodos: React.FC<AllTodosProps> = ({ navigation }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchTodos = async () => {
        await createTable();
        const fetchedTodos = await readAllTodos();
        setTodos(fetchedTodos.reverse());
      };

      fetchTodos();
    }, [])
  );

  const content =
    todos.length !== 0 ? <TodoList todosData={todos} /> : <NoTodo />;

  const handleCreateButton = () => {
    navigation.navigate("ManageTodo");
  };

  return (
    <View style={styles.container}>
      {content}
      <CreateButton onPress={handleCreateButton} />
    </View>
  );
};

export default AllTodos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 22,
    paddingHorizontal: 14
  }
});
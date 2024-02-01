import { ScrollView, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todosData }) => {
  return (
    <ScrollView styles={styles.container}>
      {todosData.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.title} />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

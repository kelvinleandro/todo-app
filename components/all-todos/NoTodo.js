import { View, Text, StyleSheet } from "react-native";

const NoTodo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Your To-Do list is empty</Text>
    </View>
  );
};

export default NoTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    color: "#fff"
  }
})
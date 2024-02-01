import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const TodoItem = ({id, text}) => {
  const navigation = useNavigation()

  const pressHandler = () => {
    navigation.navigate("ManageTodo", {
      todoId: id
    })
  }

  return (
    <TouchableOpacity onPress={pressHandler} activeOpacity={0.7} >
      <View style={styles.container} >
        <Text style={styles.text} >{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#374357",
    padding: 12,
    marginBottom: 14,
    borderRadius: 12
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600"
  }
})
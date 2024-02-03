import { useState, useLayoutEffect, useEffect } from "react";
import { Alert, View, StyleSheet } from "react-native";

import {
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
} from "../util/database";
import IconButton from "../components/UI/IconButton";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

interface ManageTodoProps {
  route: any;
  navigation: any;
}

const ManageTodo: React.FC<ManageTodoProps> = ({ route, navigation }) => {
  const [input, setInput] = useState({
    value: "",
    isValid: true,
  });
  const editedTodoId = route.params?.todoId;
  const isEditing = !!editedTodoId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit To-Do" : "Add To-Do",
    });
  }, [navigation, isEditing]);

  useEffect(() => {
    async function getEditedTodo() {
      const response = await readTodo(editedTodoId);
      setInput({
        value: response[0]?.title,
        isValid: true,
      });
    }

    if (isEditing) {
      getEditedTodo();
    }
  }, [editedTodoId, isEditing]);

  async function confirmHandler() {
    try {
      if (isEditing) {
        await updateTodo(editedTodoId, input.value.trim());
      } else {
        await createTodo(input.value.trim());
      }
      navigation.goBack();
    } catch (error) {}
  }

  async function deleteTodoHandler() {
    try {
      await deleteTodo(editedTodoId);
      navigation.goBack();
    } catch (error) {}
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function inputChangedHandler(enteredValue: string) {
    setInput({ value: enteredValue, isValid: true });
  }

  function submitHandler() {
    const inputIsValid = input.value?.trim().length > 0;

    if (!inputIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      setInput((current) => ({
        value: current.value,
        isValid: inputIsValid,
      }));
      return;
    }

    confirmHandler();
  }

  return (
    <View style={styles.container}>
      <View>
        <Input
          label="To-Do"
          textInputConfig={{
            value: input.value,
            onChangeText: inputChangedHandler,
          }}
        />
        <View style={styles.buttons}>
          <Button mode="flat" onPress={cancelHandler}>
            Cancel
          </Button>
          <Button mode="contained" onPress={submitHandler}>
            {isEditing ? "Update" : "Add"}
          </Button>
        </View>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            onPress={deleteTodoHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 8,
    paddingTop: 8,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  }
});
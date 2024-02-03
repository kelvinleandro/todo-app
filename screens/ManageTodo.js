import { Alert, View, StyleSheet } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";

import { createTodo, readTodo, updateTodo, deleteTodo } from "../util/database";
import IconButton from "../components/UI/IconButton";
import Input from "../components//UI/Input";
import Button from "../components/UI/Button";

const ManageTodo = ({ route, navigation }) => {
  const [input, setInput] = useState({
    value: "",
    isValid: true,
  });
  const editedTodoId = route.params?.todoId;
  const isEditing = !!editedTodoId;

  useEffect(() => {
    async function getEditedTodo() {
      const response = await readTodo(editedTodoId);
      setInput({
        value: response[0]?.title,
        isValid: true,
      });
    }

    getEditedTodo();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit To-Do" : "Add To-Do",
    });
  }, [navigation, isEditing]);

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

  function inputChangedHandler(enteredValue) {
    setInput({ value: enteredValue, isValid: true });
  }

  function submitHandler() {
    const inputIsvalid = input.value?.trim().length > 0;

    if (!inputIsvalid) {
      Alert.alert("Invalid input", "Please check your input values");
      setInput((current) => {
        return {
          value: current.value,
          isValid: inputIsvalid,
        };
      });
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
          <Button style={styles.button} mode="flat" onPress={cancelHandler}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={submitHandler}>
            {isEditing ? "Update" : "Add"}
          </Button>
        </View>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={"#fff"}
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
  },
  button: {
    marginHorizontal: 6,
  },
});

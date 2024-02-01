import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreateButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name="add" size={48} color="#0F1C2E" />
      </View>
    </Pressable>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    padding: 8,
    backgroundColor: "#acc2ef",
    bottom: 20,
    right: 10,
    position: "absolute",
  },
  pressed: {
    opacity: 0.75,
  },
});

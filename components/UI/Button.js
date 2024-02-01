import { Pressable, View, Text, StyleSheet } from "react-native";

const Button = ({ children, mode, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.button, mode === "flat" && styles.flat]}>
        <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  button: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#acc2ef',
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#0F1C2E",
    textAlign: "center",
    fontWeight: "500"
  },
  flatText: {
    color: '#acc2ef',
    fontWeight: "500"
  },
});

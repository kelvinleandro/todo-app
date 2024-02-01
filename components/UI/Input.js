import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, textInputConfig }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label} >{label}</Text>
      <TextInput style={styles.input} {...textInputConfig}  />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#fff",
    padding: 6,
    fontSize: 18,
    color: "#0F1C2E"
  }
})
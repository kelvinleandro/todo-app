import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AllTodos from "./screens/AllTodos";
import ManageTodo from "./screens/ManageTodo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AllTodos"
          screenOptions={{
            cardStyle: { backgroundColor: "#0F1C2E" },
            headerStyle: {
              backgroundColor: "#374357",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center"
          }}
        >
          <Stack.Screen
            name="AllTodos"
            component={AllTodos}
            options={{
              title: "All To-Dos",
            }}
          />
          <Stack.Screen name="ManageTodo" component={ManageTodo} options={{
            presentation: "modal"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
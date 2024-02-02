import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/";
import { useColorScheme } from "react-native";

import AllTodos from "./screens/AllTodos";
import ManageTodo from "./screens/ManageTodo";
import { THEMES } from "./util/themes";

const Stack = createStackNavigator();

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = THEMES[deviceTheme] || THEMES['dark']

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AllTodos"
          screenOptions={{
            cardStyle: { backgroundColor: theme.primary },
            headerStyle: {
              backgroundColor: theme.secondary,
            },
            headerTintColor: theme.text,
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="AllTodos"
            component={AllTodos}
            options={{
              title: "All To-Dos",
            }}
          />
          <Stack.Screen
            name="ManageTodo"
            component={ManageTodo}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

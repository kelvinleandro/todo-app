import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/";
import { useColorScheme } from "react-native";

import { THEMES, Themes } from "@util/themes";
import IconButton from "@components/UI/IconButton";
import AllTodos from "./screens/AllTodos";
import ManageTodo from "./screens/ManageTodo";
import Settings from "./screens/Settings";
import ColorSchemeProvider, {
  ColorSchemeContext,
} from "@context/ColorSchemeContext";

const Stack = createStackNavigator();

const Root: React.FC = () => {
  const deviceTheme = useColorScheme() || "light";
  const schemeCtx = useContext(ColorSchemeContext);
  const theme = schemeCtx.value === "automatic" ? THEMES[deviceTheme] : THEMES[schemeCtx.currentTheme as keyof Themes];

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
            options={({ navigation }) => ({
              title: "All To-Dos",
              headerRight: () => (
                <IconButton
                  icon="settings"
                  size={24}
                  onPress={() => {
                    navigation.navigate("Settings");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="ManageTodo"
            component={ManageTodo}
            options={{
              presentation: "modal",
            }}
          />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ColorSchemeProvider>
      <Root />
    </ColorSchemeProvider>
  );
};

export default App;
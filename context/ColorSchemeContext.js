import { createContext, useState } from 'react';
import { useColorScheme } from 'react-native';

export const ColorSchemeContext = createContext({
  currentTheme: "",
  value: "",
  setValue: () => {}
});

const ColorSchemeProvider = ({ children }) => {
  const deviceTheme = useColorScheme();
  const [dropDownValue, setDropDownValue] = useState("automatic")
  const [theme, setTheme] = useState(deviceTheme || 'light');

  const handleChangeTheme = (value) => {
    console.log(value)
    if (value === "automatic") {
      setTheme(deviceTheme || "light")
    }
    else {
      setTheme(value)
    }
    setDropDownValue(value)
  }

  const value = {
    currentTheme: theme,
    value: dropDownValue,
    setValue: handleChangeTheme
  }

  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider
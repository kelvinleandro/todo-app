import { createContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

interface ColorSchemeContextType {
  currentTheme: string;
  value: string;
  setValue: (value: string) => void;
}

export const ColorSchemeContext = createContext<ColorSchemeContextType>({
  currentTheme: "",
  value: "",
  setValue: () => {}
});

interface ColorSchemeProviderProps {
  children: ReactNode;
}

const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  const deviceTheme = useColorScheme();
  const [dropDownValue, setDropDownValue] = useState<string>("automatic");
  const [theme, setTheme] = useState<string>(deviceTheme || 'light');

  const handleChangeTheme = (value: string) => {
    if (value === "automatic") {
      setTheme(deviceTheme || "light");
    } else {
      setTheme(value);
    }
    setDropDownValue(value);
  };

  const value = {
    currentTheme: theme,
    value: dropDownValue,
    setValue: handleChangeTheme
  };

  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
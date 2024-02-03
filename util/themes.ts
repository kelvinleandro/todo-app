interface Theme {
  primary: string;
  secondary: string;
  text: string;
  inputText: string;
  button: string;
  dropdown: string;
}

interface Themes {
  light: Theme;
  dark: Theme;
}

export const THEMES: Themes = {
  light: {
    primary: "#cee8ff",
    secondary: "#acc2ef",
    text: "#0F1C2E",
    inputText: "#0F1C2E",
    button: "#374357",
    dropdown: "#4d648d",
  },
  dark: {
    primary: "#0F1C2E",
    secondary: "#374357",
    text: "#fff",
    inputText: "#0F1C2E",
    button: "#acc2ef",
    dropdown: "#4d648d",
  },
};
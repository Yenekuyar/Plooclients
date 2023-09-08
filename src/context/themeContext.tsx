import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ITheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes/default.theme";
import { IThemeProps, IThemeContextData } from "./themeContext.types";

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: IThemeProps) => {
  const [theme, setTheme] = useState<ITheme>(lightTheme);

  const themeStoraged = localStorage.getItem("theme") || "light";

  useEffect(() => {
    if(themeStoraged == "light") {
        setTheme(lightTheme);
    } else {
        setTheme(darkTheme);
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    if (theme.name === "light") {
      setTheme(darkTheme);
      localStorage.setItem("theme", "dark");
    } else if (theme.name === "dark") {
      setTheme(lightTheme);
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

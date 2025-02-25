import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('reeltor-theme') || 'light'
  );
  const darkTheme = () => setTheme('dark');
  const lightTheme = () => setTheme('light');

  React.useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.classList.remove('dark', 'light');
      htmlElement.classList.add(theme);
    }
    localStorage.setItem('reeltor-theme', theme);
    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return React.useContext(ThemeContext);
}

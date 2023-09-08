
import { GlobalStyles } from './themes/global.styles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/default.theme';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
        <div className="App">
          <Outlet />
        </div>
    </ThemeProvider>
  );
}

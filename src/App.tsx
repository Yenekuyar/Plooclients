import Header from './design_system/Organisms/Header/header.view';
import { Outlet } from 'react-router-dom'
import { GlobalStyles } from './themes/global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/default.theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <div className="App">
          <Header/>
          <Outlet />
        </div>
    </ThemeProvider>
  );
}
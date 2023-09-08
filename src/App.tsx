
import { GlobalStyles } from './themes/global.styles';
import { Outlet } from 'react-router-dom';
import { CustomThemeProvider } from './context/themeContext';

export default function App() {

  return (
    <CustomThemeProvider>
      <GlobalStyles />
        <div className="App">
          <Outlet />
        </div>
    </CustomThemeProvider>
  );
}

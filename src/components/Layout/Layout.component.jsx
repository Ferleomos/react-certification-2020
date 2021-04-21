import React from 'react';
import { ThemeProvider } from 'styled-components';
import './Layout.styles.css';
import themeContext from '../../providers/Themes/theme-context';
import { useGlobalContext } from "../../providers/StateManagement/StateGlobal.provider";


function Layout({ children }) {
  const { state } = useGlobalContext();
  const { theme } = state;

  return (
    <ThemeProvider theme={themeContext[theme]}>
      <main className="container">
        {children}
      </main>
    </ThemeProvider>
  );
}

export default Layout;

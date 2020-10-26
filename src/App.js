import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';
import MainLayout from './layouts/MainLayout';

export default function App() {

  return (
    <ThemeProvider>
      <GlobalStyles />
      <MainLayout>
        {routes}
      </MainLayout>
    </ThemeProvider>
  );
}

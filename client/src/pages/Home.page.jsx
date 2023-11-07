import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navbar.component.jsx';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function Home() {
  
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <NavBar></NavBar>
    </ThemeProvider>
  );
}
export default Home;

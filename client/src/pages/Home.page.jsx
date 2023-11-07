import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navbar_top.component.jsx';
import BottomNavBar from '../components/navbar_bottom.component.jsx';
import ToggleColorMode from '../components/theme_toogle.component.jsx';

const Theme = createTheme({
  palette: {
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
      <ToggleColorMode />
      <BottomNavBar></BottomNavBar>
    </ThemeProvider>
  );
}
export default Home;

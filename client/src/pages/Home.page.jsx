import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navbar.component.jsx';

const Theme = createTheme({
  palette: {
    mode: 'dark',
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

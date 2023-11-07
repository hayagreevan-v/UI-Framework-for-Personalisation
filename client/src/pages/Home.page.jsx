import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navbar.component.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function Home() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar></NavBar>
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  );
}
export default Home;

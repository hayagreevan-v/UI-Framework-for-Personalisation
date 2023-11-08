import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navbar_top.component.jsx';
import BottomNavBar from '../components/navbar_bottom.component.jsx';

// const Theme = createTheme({
//   mode: '',
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     }
//   }
// });

function Home() {

  const [theme, setTheme] = React.useState(
      createTheme({
        palette: {
          mode: 'light'
        }
      })
  );

  function toggleTheme() {
    setTheme(createTheme({
      palette: {
        mode: (theme.palette.mode === 'light') ? 'dark' : 'light'
      }
    })
  )}

  // React.useState(() => {
  //   setTheme(
  //     createTheme({
  //       palette: {
  //         mode: 'dark'
  //       }
  //     })
  //   )
  //   // console.log(theme);
  // }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleTheme={toggleTheme} curTheme={theme.palette.mode}></NavBar>
      <BottomNavBar></BottomNavBar>
    </ThemeProvider>
  );
}
export default Home;

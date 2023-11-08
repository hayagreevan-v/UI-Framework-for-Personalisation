import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navbar_top.component.jsx';
import BottomNavBar from '../components/navbar_bottom.component.jsx';
import Card from '../components/card.component.jsx';
import axios from 'axios';
import "../res/home.css";

function Preference() {

  const [theme, setTheme] = React.useState(
      createTheme({
        palette: {
          mode: 'light'
        }
      })
  );

  const getTheme = async () => {
    await axios.get('http://localhost:2003/preference/', {withCredentials: true}).then((response) => {
        setTheme(
          createTheme({
            palette: {
              mode: response.data.theme,
              primary: response.data.color_palette.primary,
              secondary: response.data.color_palette.secondary
            }
          })
        );
    });
  }

  function toggleTheme() {
    setTheme(createTheme({
      palette: {
        mode: (theme.palette.mode === 'light') ? 'dark' : 'light'
      }
    })
  )}
  
  React.useState(() => {
    getTheme();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleTheme={toggleTheme} curTheme={theme.palette.mode}></NavBar>
      <div class="header"></div>
      <div class="row1-container">
        <Card 
          class="box box-down cyan"
          title='Supervisor' 
          body='Monitors activity to identify project roadblocks' 
          img='https://assets.codepen.io/2301174/icon-supervisor.svg'
        />
        <Card 
          class="box red"
          title='Team Builder' 
          body='Scans our talent network to create the optimal team for your project' 
          img='https://assets.codepen.io/2301174/icon-team-builder.svg'
        />
        <Card 
          class="box box-down blue"
          title='Calculator' 
          body='Uses data from past projects to provide better delivery estimates' 
          img='https://assets.codepen.io/2301174/icon-calculator.svg'
        />
      </div>
      <div class="row2-container" >
        <Card 
          class="box orange"
          title='Demo' 
          body='Regularly evaluates our talent to ensure quality' 
          img='https://assets.codepen.io/2301174/icon-karma.svg'
        />
      </div>
      <BottomNavBar></BottomNavBar>
    </ThemeProvider>
  );
}
export default Preference;

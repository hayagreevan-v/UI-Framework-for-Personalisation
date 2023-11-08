import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from '../components/navbar_top.component.jsx';
import BottomNavBar from '../components/navbar_bottom.component.jsx';
import Card from '../components/card.component.jsx';
import axios from 'axios';
import "../res/home.css";
import pref1 from "../images/3f50b5.png";
function Preference() {

  const [theme, setTheme] = React.useState(
      createTheme({
        palette: {
          mode: 'light'
        }
      })
  );

  const getTheme = async () => {
    var response = await axios.get('http://localhost:2003/preference/all', {withCredentials: true}).then((respon) => {
        // setTheme(
        //   createTheme({
        //     palette: {
        //       mode: response.data.theme,
        //       primary: response.data.color_palette.primary,
        //       secondary: response.data.color_palette.secondary
        //     }
        //   })
        // );
        console.log(respon.data[0]);
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
          title='Classic' 
          body='Monitors activity to identify project roadblocks'
          img={pref1}
          >
            </Card> 
          
        <Card 
          class="box red"
          title='Dark' 
          body='Scans our talent network to create the optimal team for your project' 
          img='https://assets.codepen.io/2301174/icon-team-builder.svg'
        />
        <Card 
          class="box box-down blue"
          title='Vibrant Modern' 
          body='Uses data from past projects to provide better delivery estimates' 
          img='https://assets.codepen.io/2301174/icon-calculator.svg'
        />
      </div>
      <div class="row2-container" >
        <Card 
          class="box orange"
          title='Elegant Dark' 
          body='Regularly evaluates our talent to ensure quality' 
          img='https://assets.codepen.io/2301174/icon-karma.svg'
        />
      </div>
      <BottomNavBar></BottomNavBar>
    </ThemeProvider>
  );
}
export default Preference;

import React,{useState} from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import './App.css'
import { styleReset,  } from "react95";

import themesarr from './utils/themesarr'
// pick a theme of your choice
// import vaporTeal from "react95/dist/themes/vaporTeal";
// import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import Header from "./components/header";
import Board from './components/windowFrame'
import Footer from "./components/footer";
const GlobalStyles = createGlobalStyle`
${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color:black;
  }
  body {
    height:100vh;
    wwidth:100vw;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  ::selection{
    background:black;
    color:white;
  }
  
`;

const App = () => {
  const [theme,setTheme]=useState(0);
  console.log('app component rerenders')
  return (
    <div className='App'>
      <GlobalStyles />
      <ThemeProvider theme={themesarr[theme]}>  
        <Header setTheme={setTheme}/> 
        <Board theme={theme}/>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;

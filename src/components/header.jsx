import React, { useState } from "react";
import {AppBar } from "react95";
// import Levelsetter from "./levelsetter";
import Themes from "./themes";
const Header = ({levelSetter,setTheme}) => {
  console.log('header rerenders')
  return (
    <AppBar style={{position:'absolute',left:'0',right:'0',display:'flex',height:'45px',flexDirection:'row',justifyContent:'flex-start',gap:'80px',padding:'0 50px'}}>
      <Themes setTheme={setTheme}/>
      {/* <Levelsetter levelSetter={levelSetter}/> */}
    </AppBar>
  );
};

export default Header;

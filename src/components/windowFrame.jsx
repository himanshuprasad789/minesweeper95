import React, { useState, useRef } from "react";
import { Window, WindowContent, WindowHeader, Toolbar, Button,Table,TableRow,TableBody,TableDataCell,TableHeadCell } from "react95";

import Board from "./board";

import "./../App.css";
import Levelsetter from "./levelsetter";
// import StopWatch from "./../components95/stopwatch";



const WindowFrame = ({ theme }) => {

  const [level,setLevel]=useState(0)
  const boardRef=useRef()

  
  const levelSetter=(e)=>{
    console.log(e.target.textContent)
    const l=e.target.textContent;
    if(l==='easy')    setLevel(0)
    if(l==='medium')  setLevel(1)
    if(l==='hard') setLevel(2)
  }

  console.log('board component rerenders')
  return (
    <>
      <Window>
        <WindowHeader className="window-header">
          MineSweeper.exe
          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        {/* <Panel><StopWatch /></Panel> */}
        <Toolbar >
          <Button variant="menu" size="sm" onClick={() => boardRef.current.freshboard()}>
            New Game
          </Button>
          <Button variant="menu" size="sm" onClick={() => boardRef.current.restartGame()}>
            Restart
          </Button>
          <Button variant="menu" size="sm" onClick={() => boardRef.current.solveBoard()}>
            Solve
          </Button>
          <Levelsetter levelSetter={levelSetter}/>
        </Toolbar>
        <WindowContent>
          <Board  ref={boardRef} level={level} theme={theme} />
        </WindowContent>
      </Window>
    </>
  );
};

export default WindowFrame;

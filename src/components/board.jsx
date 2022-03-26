import React,{useState,useEffect,forwardRef,useImperativeHandle} from 'react'
import {Table,TableRow,TableBody,TableDataCell } from "react95";

import createBoard from "../utils/boardLogic";
import reveal from "../utils/reveal";
import Cell from "./cell";
import mine from './../assets/mine.png'


import Gameover from "./gameover";
import Congrats from "./congrats";


let initialboard = null;
const Board = ({level,theme},ref) => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMinecount] = useState(null);
  const [gameOver, setGameOver] = useState(null);
  const [col, setCol] = useState(10);
  const [mines, setMines] = useState(15);

  useEffect(() => {
    freshboard();
  }, [level]);

  useImperativeHandle(ref,()=>({freshboard,restartGame,solveBoard}))
  

  const freshboard = () => {
    let col = level == 0 ? 10 : level == 1 ? 14 : level === 2 ? 18 : 10;
    setCol(col);
    const mines = level == 0 ? 15 : level == 1 ? 24 : level === 2 ? 35 : 15;
    setMines(mines);
    const newBoard = createBoard(10, col, mines).board;
    initialboard = [...newBoard];
    setGrid(newBoard);
    setNonMinecount(10 * col - mines);
    setGameOver(false);
  };
  const restartGame = () => {
    setGrid(initialboard);
    setNonMinecount(10 * col - mines);
    setGameOver(false);
  };

  // console.log("no of cells without mine now ", nonMineCount);
  //on Right Click
  const updateFlag = (e, x, y) => {
    e.preventDefault();
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = !grid[x][y].flagged;
    // newGrid[x][y].value='F';
    setGrid(newGrid);
    // console.log(newGrid[x][y]);
    // console.log("right click");
  };

  const solveBoard = () => {
    const unsolvedboard = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < unsolvedboard.length; i++) {
      for (let j = 0; j < unsolvedboard[0].length; j++) {
        if (unsolvedboard[i][j].revealed === true) continue;
        unsolvedboard[i][j].revealed = true;
      }
    }
    setGrid(unsolvedboard);
    setNonMinecount(10 * col - mines);
    // console.log("board solved");
  };

  //on Left Click
  const revealCell = (x, y) => {
    const newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "B") {
      newGrid[x][y].revealed = true;
      setGameOver(true);
    }
    if (newGrid[x][y].value === 0) {
      let [neighboursRevealedGrid, revealCount] = reveal(newGrid, x, y);
      // console.log(revealCount, "cells revealed");
      setGrid(neighboursRevealedGrid);
      // console.log(`${noOfRevealCells} cells revealed`)
      setNonMinecount(nonMineCount - revealCount);
      return;
    } else {
      newGrid[x][y].flagged = false;
      newGrid[x][y].revealed = true;
      setNonMinecount((nonMineCount) => nonMineCount - 1);
      setGrid(newGrid);
    }
  };
  if (!grid) return (<p>Loading..</p>)
  return (
    <>
    <Table>
            <TableBody>
              <TableRow>
                <TableDataCell>mines <img src={mine} height={12} width={12} /> </TableDataCell>
                <TableDataCell>{mines}</TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
          {grid.map((row, i1) => {
        return (
          <div key={i1}>
            {row.map((el, i2) => {
              return (
                <Cell
                  key={`${i1},${i2}`}
                  details={el}
                  revealCell={revealCell}
                  updateFlag={updateFlag}
                  theme={theme}
                />
              );
            })}
          </div>
        );
      })}
      {gameOver && <Gameover close={()=>{
        setGameOver(false)
        solveBoard()
      }}/>}
      {nonMineCount==0 && <Congrats close={()=>{
        setNonMinecount(10*col-mines)
        solveBoard()
      }}/>}
    </>
  )
  
}

export default forwardRef(Board)
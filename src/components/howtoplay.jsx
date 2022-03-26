import React,{useState} from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import Modal from "./modal";
import '../App.css'
import { popupWindowStyle } from "../commonstyles";

const HowtoPlay = ({setOpenhowtoplay}) => {
  console.log('Howtoplay rerenders')
  return (
    <Modal>
      <Window style={popupWindowStyle}>
        <WindowHeader className='window-header'>how to play<Button onClick={()=>setOpenhowtoplay(false)}>
          <span className="close-icon" />
        </Button></WindowHeader>
        <WindowContent>
          <div style={{ fontWeight: "bold" }}>Controls</div>
          <br />
          Left-click to open a cell.
          <br />
          Right-click to toggle a flag on a cell. (Sorry mobile users.)
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>Goal</div>
          <br />
          When you open a cell, it reveals a number that shows how many mines
          are around that cell, including all diagonals.
          <br />
          Clicking on a cell without a number, will reveal all adjacent empty
          cells. The goal is to reveal all cells, without clicking on a mine.
          <br />
          <br />
          Good Luck!
          <br />
          <br />
          <Button onClick={() => setOpenhowtoplay(false)}>Close</Button>
        </WindowContent>
      </Window>
    </Modal>
  );
};

export default HowtoPlay;

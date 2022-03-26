import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import Modal from "./modal";
import '../App.css'
import { popupWindowStyle } from "../commonstyles";
import mine from './../assets/mine.png'

const Gameover = (props) => {
  console.log('Gameover component rerenders')
  return (
    <Modal>
      <Window style={popupWindowStyle}>
        <WindowHeader className='window-header'>Game Over <Button onClick={()=>props.close()}>
          <span className="close-icon" />
        </Button></WindowHeader>
        <WindowContent>
          <img src={mine} height={24} width={24} />
          <div style={{ fontWeight: "bold" }}>Sorry! You lost. Try again!</div>
          <br />
          You can close this popup and click "New Game" for a fresh start.
          <br />
          <br />
          <Button onClick={() => props.close()}>Close</Button>
        </WindowContent>
      </Window>
    </Modal>
  );
};

export default Gameover;

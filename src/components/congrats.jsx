import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import Modal from "./modal";
import "../App.css";
import { popupWindowStyle } from "../commonstyles";
const Congrats = (props) => {
  console.log('Congrats components rerenders')
  return (
    <Modal>
      <Window style={popupWindowStyle}>
        <WindowHeader className="window-header">
          Congratulations
          <Button onClick={() => props.close()}>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <WindowContent>
          {/* <img src={smiley} height={24} width={24} /> */}
          <div style={{ fontWeight: "bold" }}>Congrats! You won!</div>
          <br />
          <br />
          You can close this popup and click "New Game", if you want to play
          again.
          <br />
          <br />
          <Button onClick={() => props.close()}>Close</Button>
        </WindowContent>
      </Window>
    </Modal>
  );
};

export default Congrats;

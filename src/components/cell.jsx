import React from "react";
import { Button } from "react95";
import themesarr from "../utils/themesarr";
import flag from "./../assets/flag.png";
import mine from "./../assets/mine.png";

const Cell = ({ details, updateFlag, revealCell,theme}) => {
  const numColorsMap = {
    x: null,
    0: themesarr[theme].material,
    1: "blue",
    2: "green",
    3: "red",
    4: "purple",
    5: "maroon",
    6: "turquoise",
    7: "black",
    8: "grey"
  };
  console.log('cell component rerenders')
  return (
    <Button
      square
      variant={details.revealed ? "flat" : "default"}
      size="sm"
      onClick={() => revealCell(details.x, details.y)}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      style={{
        fontSize: "15px",
        fontWeight: "bold",
        backgroundColor: themesarr[theme].material,
        color:  numColorsMap[details.value],
        border: details.revealed === true ? "0px" : null,
        outline: details.revealed ? `${themesarr[theme].materialDark} solid 2px` : null,
        outlineOffset: "-4px",
        tapHighlightColor: "transparent"
      }}
      disabled={details.revealed ? true : false}
    >
      {details.revealed && details.value === "B" ? (
        <img src={mine} width="11px" height="11px" alt="B" />
      ) : details.revealed && details.value !== "B" ? (
        details.value
      ) : details.flagged ? (
        <img src={flag} width="12px" height="12px" alt="F" />
      ) : (
        <p>&nbsp;</p>
      )}
    </Button>
  );
};

export default Cell;

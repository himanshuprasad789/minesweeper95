export default (row, col, bombs) => {
  // let board=new Array(row).fill(0).map(()=>new Array(col).fill(0))
  let board = [];
  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false
      });
    }
    board.push(subCol);
  }
  let minepos = new Set();
  let minecount = 0;
  while (minecount!==bombs) {
    let r = Math.floor(Math.random() * row);
    let c = Math.floor(Math.random() * col);
    let pos = r + "," + c;
    if (minepos.has(pos)) {
      continue;
    } else {
      board[r][c].value = "B";
      minepos.add(pos)
      minecount++;
    }
  }
  const explore = (board, i, j) => {
    let count = 0;
    for (let a = -1; a < 2; a++) {
      for (let b = -1; b < 2; b++) {
        if (a == 0 && b == 0) continue;
        if (i + a < 0 || i + a >= row) continue;
        if (j + b < 0 || j + b >= col) continue;

        if (board[i + a][j + b].value === "B") {
          count++;
        }
      }
    }
    return count;
  };
  //O(n^2)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j].value == "B") continue;
      board[i][j].value = explore(board, i, j);
    }
  }
  return {board,minecount}
};

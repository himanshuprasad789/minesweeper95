
// the goal is reveal the cells and count
// possibility ->
// cell could be out of bounds we dont need to count
// cell could be 0 , (1,2,3,4,...8) and unrevealed
// cell could be already revealed ,for that we dont have to recount

//this functions reveals the tiles and returns an new edited revealed array and number of revealed cells
export default (arr, x, y) => {
  let revealCount = countRevealed(arr, x, y);
  // console.log(revealCount,'cells')
  return [arr,revealCount];
};

const countRevealed = (arr, x, y) => {
  if (x < 0 || x >= arr.length) return 0;
  if (y < 0 || y >= arr[0].length) return 0;
  
  if (arr[x][y].value !== 0 ) {
    return 0;
  }
  let count=0;
  
  for (let a = -1; a < 2; a++) {
    for (let b = -1; b < 2; b++) {
      // if (a == 0 && b == 0) continue;
      if (x + a < 0 || x + a >= arr.length) continue;
      if (y + b < 0 || y + b >= arr[0].length) continue;
      if(arr[x+a][y+b].revealed===true){
        continue;
      }
      if(arr[x+a][y+b].revealed===false){
        arr[x + a][y + b].revealed = true;
        count++;
        count+=countRevealed(arr,x+a,y+b)
      }
    }
  }
  return count;

};

// Code goes here
const button = document.querySelector('#show-hint');


// Show hint on click of the button
button.addEventListener('click', () => {
  document.querySelector('.hint').classList.add('active');
})

// select all tiles
const tiles = document.querySelectorAll("td");

// 2. Create a function to check if we can move the element (tile) - takes a tile as an argument
const canIMove = (tile) => {
// find the empty tile
 const emptyTile = document.querySelector(".empty");

 // get the cell index of the empty tile
 const emptyTileColumn = document.querySelector(".empty").cellIndex;

 // get the row index of the empty tile
 const emptyTileRow = emptyTile.parentElement.rowIndex;

// get the row index of the tile we clicked on
 const tileRow = tile.parentElement.rowIndex;

 // get the cell index of the tile we clicked on
 const tileColumn = tile.cellIndex;

 // check all possibilities if a tile can move
  return (emptyTileRow === tileRow && emptyTileColumn === tileColumn - 1) || // if empty tile is on the left of the clicked tile
         (emptyTileRow === tileRow && emptyTileColumn === tileColumn + 1) || // if empty tile is on the right of the clicked tile
         (emptyTileColumn === tileColumn && emptyTileRow === tileRow - 1) || // if empty tile is at the top of the clicked tile
         (emptyTileColumn === tileColumn && emptyTileRow === tileRow + 1) // if empty tile is at the bottom of the clicked tile
}


// 3. Move the element - creating a function that takes a tile as an argument
const moveTile = (tile) => {
  const emptyTile = document.querySelector(".empty");
  // update the inner text of the empty block with the inner text of the clicked tile
  emptyTile.innerText = tile.innerText;
  // remove innerText of clicked tile ''
  tile.innerText = "";
  // remove empty class of the empty block
  emptyTile.classList.remove('empty');
  // add empty class to the clicked tile
  tile.classList.add('empty');
}

// 4. check if we are winning

// You can check if this function is working by manually reordering the tiles from the index.html
// and run the function directly below;
const checkIfPlayerWins = () => {
  // get the order of the tiles after each click and convert it into an array of strings
  // each string represents the innerText of the tile
  const tileOrder = Array.from(tiles).map(tile => tile.innerText);

  // compare the tileOrder with this manually sorted array
  if (tileOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
    // send alert in the browser
    alert("You win!!");
  }
}

// checkIfPlayerWins(); Use this to test

// 5. For each tile ON CLICK, we need to run the above functions
tiles.forEach( (tile) => {
  tile.addEventListener("click", (event) => {
    // on click of a tile check if we can move it
    if (canIMove(tile)) {
      // if we can move the tile -> move it
      moveTile(tile);

      // on every click, keep checking if the user wins
      checkIfPlayerWins();
    }
  });
});

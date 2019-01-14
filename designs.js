// Select color input
let inputColor = document.getElementById('colorPicker');
// Select size input
let inputSizeHeight = document.getElementById('inputHeight');
let inputSizeWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker")
  .addEventListener("submit", makeGrid, false);

function makeGrid(e) {

  // Your code goes here!
  let inputColorValue = inputColor.value;
  let inputSizeHeightValue = inputSizeHeight.value;
  let inputSizeWidthValue = inputSizeWidth.value;
  e.preventDefault();

}

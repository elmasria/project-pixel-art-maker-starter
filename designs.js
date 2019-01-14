"use strict";

// Select color input
let inputColor = document.getElementById('colorPicker');

// Select size input
let inputSizeHeight = document.getElementById('inputHeight');
let inputSizeWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker")
  .addEventListener("submit", makeGrid, false);

function makeGrid(e) {

  e.preventDefault();

  // Select grid Canvas
  let tblGrid = document.getElementById("pixelCanvas");

  // Get input values
  let inputSizeHeightValue = inputSizeHeight.value;
  let inputSizeWidthValue = inputSizeWidth.value;

  tblGrid.innerHTML = "";

  const fragment = document.createDocumentFragment();

  // loop over the height size to create the table row
  for (var i = 0; i < inputSizeHeightValue; i++) {
    let gridRow = document.createElement("tr");

    // loop over the width size to create table cell
    for (var z = 0; z < inputSizeWidthValue; z++) {
      let gridCell = document.createElement("td");
      Object.assign(gridCell, {
        className: 'canvas-cell',
      });
      gridCell.addEventListener('click', (event) => {
        colorCell(event, gridCell);
      });
      gridRow.appendChild(gridCell);
    }

    fragment.appendChild(gridRow);
  }
  tblGrid.appendChild(fragment);
}

// style the canvas grid cell
function colorCell(e, el) {
  let inputColorValue = inputColor.value;
  el.style.backgroundColor = inputColorValue;
}

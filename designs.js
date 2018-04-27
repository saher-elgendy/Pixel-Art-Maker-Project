// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submit = document.getElementById("submit-but");
const table = document.getElementById( 'pixelCanvas' );

function makeGrid(e) {
  // declaring some variables expressing grid height and width
  const gridHeight = document.getElementById('inputHeight');
  const gridWeight = document.getElementById('inputWeight');
  // clearing the grid when click submit
  table.innerHTML = "";
  
  for ( let i = 0 ; i < gridHeight.value ; i++ ) {
    // creating the table rows
  	let tr = document.createElement('tr');

  	for( let j = 0 ; j < gridWeight.value ; j++ ) {
     // creating the table cells and appending to rows
  		let td = document.createElement('td');
  		tr.appendChild(td);
  	}
    // appending rows to table
  	table.appendChild(tr);
  }
 // preventing the default refreshing action of submit button
  e.preventDefault();
}

submit.onclick = makeGrid;

// coloring the table cells 
function gridColoring(e) {
  const colorPicker = document.getElementById('colorPicker');
  // prevent coloring unwanted cells
  if(e.target.nodeName.toLowerCase() === 'td'){
      e.target.style.backgroundColor = colorPicker.value;  
  }

}

table.addEventListener('click', gridColoring);
import '/styles/gridstack.css';
import { GridStack } from 'gridstack';

function userSearch(){
  console.log('penis');
}

function test() {
  grid.addWidget({content: 'debug'});
}


// INITIALIZE GRIDSTACK with fixed height for vertical resizing
const grid = GridStack.init({
  float: true,// Fixed pixel height instead of 'auto' to enable vertical resizing
  minRow: 1,
  margin: 5,
  resizable: {
    handles: 'e, se, s, sw, w' // Enable all resize handles
  }
});

const widgets = [
  {
    w: 3, h: 4,
    id: 'widget-ac', // ACCOUNT INFO
    minW: 2, minH: 3 // Minimum size constraints
  },
  {
    w: 3, h: 4,
    id: 'widget-cc', // CALIX CLOUD 
    minW: 2, minH: 3
  },
  {
    w: 3, h: 4,
    id: 'widget-os', // ONLINE STATUS
    minW: 2, minH: 3
  },
  {
    w: 3, h: 4,
    id: 'widget-cpni', // CPNI
    minW: 2, minH: 3
  }
];



widgets.forEach(widget => {
  const el = grid.addWidget(widget);
  const content = el.querySelector('.grid-stack-item-content');
  
  // BITCHY ASS FIX FOR DISPLAYING WIDGET AS HTML

  if (widget.id === 'widget-ac') {
    content.innerHTML = `
      <b><h1>Account Info</h1></b>
      <div id="ac">
        <p>Account Number: </p>
        <p>Name: </p>
        <p>Address: </p>
        <p>Phone Number: </p>
        <p>Email: </p>
        <p>Service Type: </p>
        <p>Account Status: </p>
      </div>
    `;
  } else if (widget.id === 'widget-cc') {
    content.innerHTML = `
      <b><h1>Calix Cloud Profile</h1></b>
      <div id="cc">
        <p>Online?: </p>
        <p>Running Time: </p>
        <p>Router Model: </p>
        <p>MAC: </p>
        <p>Public IP: </p>
        <button type="button">Reboot</button>
        <button type="button">Retrieve Data Logs</button>
      </div>
    `;
  } else if (widget.id === 'widget-os') {
    content.innerHTML = `
      <b><h1>Online Status</h1></b>
      <div id="os">
        <p>Current online status: </p>
        <p>Current MAC: </p>
        <p>Last login from history: </p>
        <button type="button">More past sessions</button>
        <button type="button">Refresh</button>
      </div>
    `;
  } else if (widget.id === 'widget-cpni') {
    content.innerHTML = `
      <b><h1>CPNI</h1></b>
      <div id="cpni">
        <p>Opt-out? </p>
        <p>Question 1: </p>
        <p>Question 2: </p>
        <p>Pin: </p>
        <p>CBR: </p>
      </div>
    `;
  }
});
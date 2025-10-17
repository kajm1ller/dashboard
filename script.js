import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';

// Initialize GridStack
const grid = GridStack.init({
  float: true,
  cellHeight: '70px',
  minRow: 1
});

// Define widgets with their content and properties
const widgets = [
  {
     w: 3, h: 4.5,
    id: 'widget-ac'
  },
  {
     w: 3, h: 4.5,
    id: 'widget-cc'
  },
  {
     w: 3, h: 4.5,
    id: 'widget-os'
  },
  {
     w: 3, h: 4.5,
    id: 'widget-cpni'
  }
];


widgets.forEach(widget => {
  const el = grid.addWidget(widget);
  const content = el.querySelector('.grid-stack-item-content');
  
  // BITCHY ASS FIX FOR DISPLAYING WIDGET AS HTML
  if (widget.id === 'widget-ac') {
    content.innerHTML = `
      <div id="ac">
        <b><h1>Account Info</h1></b>
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
      <div id="cc">
        <b><h1>Calix Cloud Profile</h1></b>
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
      <div id="os">
        <b><h1>Online Status / Login History</h1></b>
        <p>Current online status: </p>
        <p>Current MAC: </p>
        <p>Last login from history: </p>
        <button type="button">More past sessions</button>
        <button type="button">Refresh</button>
      </div>
    `;
  } else if (widget.id === 'widget-cpni') {
    content.innerHTML = `
      <div id="cpni">
        <b><h1>CPNI</h1></b>
        <p>Opt-out? </p>
        <p>Question 1: </p>
        <p>Question 2: </p>
        <p>Pin: </p>
        <p>CBR: </p>
      </div>
    `;
  }
});
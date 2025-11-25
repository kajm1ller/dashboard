// GridStack is loaded as a global by the UMD bundle included in index.html
let grid = null;

function userSearch() {
  console.log("userSearch triggered");
}

// Function to get widget HTML content based on widget type
function getWidgetContent(widgetType) {
    switch (widgetType) {
        case "ac":
            return `
        <div class="widget-header">
          <h1>Account Info</h1>
          <button class="widget-close" onclick="removeWidget(this)">×</button>
        </div>
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
        case "cc":
            return `
        <div class="widget-header">
          <h1>Calix Cloud Profile</h1>
          <button class="widget-close" onclick="removeWidget(this)">×</button>
        </div>
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
        case "os":
            return `
        <div class="widget-header">
          <h1>Online Status</h1>
          <button class="widget-close" onclick="removeWidget(this)">×</button>
        </div>
        <div id="os">
          <p>Current online status: </p>
          <p>Current MAC: </p>
          <p>Last login from history: </p>
          <button type="button">More past sessions</button>
          <button type="button">Refresh</button>
        </div>
      `;
        case "cpni":
            return `
        <div class="widget-header">
          <h1>CPNI</h1>
          <button class="widget-close" onclick="removeWidget(this)">×</button>
        </div>
        <div id="cpni">
          <p>Opt-out? </p>
          <p>Question 1: </p>
          <p>Question 2: </p>
          <p>Pin: </p>
          <p>CBR: </p>
        </div>
      `;
        case "notes":
            return `
        <div class="widget-header">
          <h1>Notes</h1>
          <button class="widget-close" onclick="removeWidget(this)">×</button>
        </div>
        <div id="notes">
          <textarea id="noteArea" placeholder="Enter your notes here..."></textarea>
          <button type="button" onclick="copyToClipboard()">Copy to clipboard</button>
        </div>
      `;

      case "friend":
            return `
        <div class="widget-header">
        <b><h1>Friend</h1></b>
        <button class="widget-close" onclick="removeWidget(this)">×</button>
        </div>
          <img src="casey.jpg" alt="mokey" width="470" height="454">
        
      `;
        default:
            return "<div>Invalid widget type</div>";
    }
}

window.test = function () {
    const widgetSelect = document.getElementById("widget");
    const selectedWidget = widgetSelect.value; // Gets the selected widget type (ac, cc, os, or cpni)

    // Create widget configuration
    const widgetConfig = {
        w: 3,
        h: 3,
        id: `widget-${selectedWidget}`,
        minW: 2,
        minH: 3,
    };

    if (!grid) {
      console.error('Grid not initialized yet.');
      return;
    }

    // Add the widget to the grid and get the element
    const el = grid.addWidget(widgetConfig);

    // Get the content div and set its HTML
    const content = el.querySelector(".grid-stack-item-content");
    content.innerHTML = getWidgetContent(selectedWidget);
};

// Dashboard loading function
window.loadDashboard = function(role) {
    // Hide role selection and show dashboard
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'block';
    
    // Set the dashboard title based on role
    const dashboardTitle = document.getElementById('dashboard-title');
    dashboardTitle.textContent = role === 'tech' ? 'Tech Dashboard' : 'CS Dashboard';
}

// Function to go back to role selection
window.goBack = function() {
    // Remove all widgets from the grid
    grid.removeAll();
    
    // Hide dashboard and show role selection
    document.getElementById('dashboard-container').style.display = 'none';
    document.getElementById('role-selection').style.display = 'flex';
}

// INITIALIZE GRIDSTACK with fixed height for vertical resizing
document.addEventListener('DOMContentLoaded', () => {
  const GridStackLib = window.GridStack || (typeof GridStack !== 'undefined' && GridStack);
  if (!GridStackLib) {
    console.error('GridStack library not found on window. Make sure the UMD script is included before this module.');
    return;
  }

  grid = GridStackLib.init({
    float: true, // allow floating
    minRow: 1,
    margin: 5,
    resizable: {
      handles: "e, se, s, sw, w",
    },
  });
});

// No initial widgets - they will be added by user selection

// Function to remove a widget when the close button is clicked
window.removeWidget = function (closeButton) {
    const gridItem = closeButton.closest(".grid-stack-item");
    grid.removeWidget(gridItem);
};

window.copyToClipboard = function() {
    // Get the text field
    var copyText = document.getElementById("noteArea");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

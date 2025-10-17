import "/styles/gridstack.css";
import { GridStack } from "gridstack";

function userSearch() {
    console.log("penis");
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
          <img src="casey.jpg" alt="mokey" width="470" height="454">
        </div>
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

    // Add the widget to the grid and get the element
    const el = grid.addWidget(widgetConfig);

    // Get the content div and set its HTML
    const content = el.querySelector(".grid-stack-item-content");
    content.innerHTML = getWidgetContent(selectedWidget);
};

// INITIALIZE GRIDSTACK with fixed height for vertical resizing
const grid = GridStack.init({
    float: true, // Fixed pixel height instead of 'auto' to enable vertical resizing
    minRow: 1,
    margin: 5,
    resizable: {
        handles: "e, se, s, sw, w", // Enable all resize handles
    },
});

// No initial widgets - they will be added by user selection

// Function to remove a widget when the close button is clicked
window.removeWidget = function (closeButton) {
    const gridItem = closeButton.closest(".grid-stack-item");
    grid.removeWidget(gridItem);
};

function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("noteArea");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

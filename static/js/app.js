// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build the table 
function buildTable(data) {
    // Empty the current contents of the table
    tbody.html("");
    // Function to append each row of data by looping through each row
    data.forEach((dataRow) => {
        // Find the <tbody> tag within HTML and add a table row "tr"
        let row = tbody.append("tr");
        // Reference one object from the array of UFO sightings and have the values go into the dataRow with one object per row
        Object.values(dataRow).forEach((val) => {
            // Create a variable to append the data
            let cell = row.append("td");
            // Add the values
            cell.text(val);
        });
    });
}
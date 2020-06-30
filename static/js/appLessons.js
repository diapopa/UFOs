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

// Function to handle button clicks
function handleClick() {
    // Grab the value of filtered by the date
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // if statement that applies a filter method that will match the datetime value to the filtered date value
    if (date) {
        console.log(date)
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
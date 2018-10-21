// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// tableData.forEach((UFOReport) => {
//     var row = tbody.append("tr");
//     Object.entries(UFOReport).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });


// Build the table out:
function ufoTable(data){
tbody.html("") 
data.forEach((datarow)=>{
    var row = tbody.append("tr")
    Object.values(datarow).forEach((value)=>{
        var cell = row.append("td")
        cell.text(value)
    })   
})
}
ufoTable(tableData)

// Filter table

function filterTable(){
d3.event.preventDefault()
var date = d3.select("#datetime").property("value")
var filterData = tableData
if (date){
    filterData = filterData.filter(row=>row.datetime===date)
}
ufoTable(filterData)
}
// On click for the event of filter
d3.selectAll("#filter-btn").on("click", filterTable)

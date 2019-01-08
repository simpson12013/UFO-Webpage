var tableData = data;
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

data.forEach(function(ufoReport) {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
     var cell = tbody.append("td");
     cell.text(value);
   });
});
submit.on("click", function() {

   d3.event.preventDefault();
   tbody.selectAll("td").remove();

   var inputElement = d3.select("#datetime");

   var inputValue = inputElement.property("value");

   var filteredData = data.filter(data => data.datetime === inputValue);
   console.log(filteredData);

   filteredData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
   

});
});
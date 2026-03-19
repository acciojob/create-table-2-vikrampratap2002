function createTable() {
  var rn = prompt("Input number of rows");
  var cn = prompt("Input number of columns");

  // Ignore non-numeric input
  if (isNaN(rn) || isNaN(cn) || rn === null || cn === null || rn === "" || cn === "") {
    return;
  }

  rn = Number(rn);
  cn = Number(cn);

  // Reject zero or negative values
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  var table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Build rows and cells
  for (var i = 0; i < rn; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < cn; j++) {
      var cell = row.insertCell(j);
      cell.textContent = "Row-" + i + " Column-" + j;
    }
  }
}
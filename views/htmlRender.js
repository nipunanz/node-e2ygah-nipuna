function renderHtml(errors) {
  const heading = '<h2>Errors List</h2>';

  //Populating table view
  const tableHeaders =
    '<tr><th>Message</th><th>Value</th><th>Line Number</th></tr>';
  var tableData = '';
  for (let error of errors) {
    tableData =
      tableData +
      '<tr><td>' +
      error['message'] +
      '</td><td>' +
      error['value'] +
      '</td><td>' +
      error['line'] +
      '</td></tr>';
  }
  const tableView = '<table>' + tableHeaders + tableData + '</table>';

  const finalView = heading + tableView;

  const htmlPage =
    `'<html>
      <head>
      <style>

      h2 {
        font-family: arial, sans-serif;
        text-align: center;
      }

      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      th {
        background-color: #dddddd;
      }
    
      </style>
      </head>
      <body>
      ` +
    finalView +
    `
      </body>
      </html>'`;

  return htmlPage;
}

module.exports = {
  renderHtml,
};

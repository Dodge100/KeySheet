function onEdit(e) {
  var dataSheetName = "dataSheet"; //Cchange the value in quotation marks to change the name of your sheet with the key and data values.

  // Check if the edited sheet is not the data sheet
  if (e.range.getSheet().getName() !== dataSheetName) {
    var activeSheet = e.range.getSheet();
    replaceKeywords(activeSheet, dataSheetName);
  }
}

// Checks cells to see if they match with a key
function replaceKeywords(activeSheet, dataSheetName) {
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(dataSheetName);

  var activeRange = activeSheet.getDataRange();
  var activeValues = activeRange.getValues();

  for (var i = 0; i < activeValues.length; i++) {
    for (var j = 0; j < activeValues[i].length; j++) {
      var keyword = activeValues[i][j];
      if (typeof keyword === 'string' && keyword.trim() !== "") {
        var data = searchDataInDataSheet(keyword, dataSheet);
        if (data !== "") {
          activeSheet.getRange(i + 1, j + 1).setValue(data);
        }
      }
    }
  }
}

// Replaces with the correct data
function searchDataInDataSheet(keyword, dataSheet) {
  var lastRow = dataSheet.getLastRow();
  var keywordColumn = dataSheet.getRange(1, 2, lastRow, 2).getValues(); // Assuming keywords are in column B and C

  for (var i = 0; i < keywordColumn.length; i++) {
    if (keywordColumn[i][0] === keyword || keywordColumn[i][1] === keyword) {
      return dataSheet.getRange(i + 1, 4).getValue(); // Return corresponding data from column D
    }
  }

  return "";
}

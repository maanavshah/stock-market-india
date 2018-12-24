var camelCase = require('lodash').camelCase;

function csvToJson(csv) {
  var lines = csv.split('#');
  var result = {};

  for (var i = 0; i < lines.length; i++) {
    var row = lines[i].trim().split(',');
    result[camelCase(row[0])] = row[1];
  }
  return result;
}

module.exports = csvToJson;
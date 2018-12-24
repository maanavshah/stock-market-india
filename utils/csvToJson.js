function csvTojs(csv, headersValues) {
  var lines = csv.split('#');
  var result = [];
  var startPos = 0;
  var headers = (headersValues && headersValues.split(',')) || lines[0].split(',');

  if (headersValues) {
    startPos = 0;
  } else {
    startPos = 1;
  }

  for (var i = startPos; i < lines.length; i++) {
    var obj = {};

    var row = lines[i],
      queryIdx = 0,
      startValueIdx = 0,
      idx = 0;

    if (row.trim() === '') {
      continue;
    }

    while (idx < row.length) {
      /* if we meet a double quote we skip until the next one */
      var c = row[idx];

      if (c === '"') {
        do {
          c = row[++idx];
        } while (c !== '"' && idx < row.length);
      }

      if (c === ',' || /* handle end of line with no comma */ idx === row.length - 1) {
        /* we've got a value */
        var value = row.substr(startValueIdx, idx - startValueIdx + 1).trim();

        /* skip first double quote */
        if (value[0] === '"') {
          value = value.substr(1);
        }
        /* skip last comma */
        if (value[value.length - 1] === ',') {
          value = value.substr(0, value.length - 1);
        }
        /* skip last double quote */
        if (value[value.length - 1] === '"') {
          value = value.substr(0, value.length - 1);
        }

        var key = 'value' + queryIdx;
        if (queryIdx + 1 <= headers.length) {
          key = headers[queryIdx++] || 'value' + queryIdx;
        } else {
          key = 'value' + queryIdx++;
        }

        obj[key] = value;
        startValueIdx = idx + 1;
      }

      ++idx;
    }

    result.push(obj);
  }
  return result;
}

module.exports = csvTojs;

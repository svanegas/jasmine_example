var express = require('express');
var app = express();

app.use(express.static('app'));

var server = app.listen(8000, function () {
  console.log('Jasmine Example application listening at port 8000');
});

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('../modules/routes/index');
var peeps = require('../modules/routes/peeps');

app.use('/', index);
app.use('/peeps', peeps);
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(8080, 'localhost', function () {
  console.log('listening on 8080');
});
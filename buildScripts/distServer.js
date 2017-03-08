var express = require('express');
var path = require('path');
var  open = require('open');
var  compression = require('compression');
var  cors =require('cors');
/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());
app.use(cors());

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

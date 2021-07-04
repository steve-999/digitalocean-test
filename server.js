var express = require('express');
const cors = require('cors');
const path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.use(cors());

app.get('/index', function(request, response) {
  response.json('Hello World!')
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

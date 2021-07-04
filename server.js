var express = require('express');
const cors = require('cors');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/index', function(request, response) {
  response.json('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

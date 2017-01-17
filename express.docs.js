var express = require('express');
var app = express();

// Define the port to run on
app.set('port', 8080);

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;


    // app.use('/example/assets', express.static(__dirname + '/dist'));
    app.use(express.static(__dirname + '/build/docs'));

    console.log('Magic happens on port ' + port);
});
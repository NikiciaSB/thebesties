var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
var mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, './client/static')));
require('./server/config/mongoose')
require('./server/config/user_routes.js')(app)
var routes_setter = require('./server/config/user_routes.js');
routes_setter(app);
app.use(express.static( __dirname + '/public/dist/public' ));
mongoose.Promise = global.Promise;
app.listen(8000, function () {
    console.log(__dirname);
    console.log("Listening on port 8000");
});

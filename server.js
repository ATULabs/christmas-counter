var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/christmasCountDownRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('christmas count down RESTful API server started on: ' + port);
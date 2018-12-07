var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

var VideoRoute = require('./routes/VideoRoute');
var CustRoute = require('./routes/CustRoute');
var index = require('./routes/index');

var port = 4000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//app.use(express.static(path.join(__dirname), 'my-app'));

// bodyParser extracts data from body when requested as POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// if you look at the header, it is
// Content-Type application/json; charset=utf-8
app.use('.', index);
app.use('/', VideoRoute);
app.use('/', CustRoute);


// processing a request from localhost:1234/video
// if you look at the header, it is
// Content-Type application/json; charset=utf-8
app.use('/video', VideoRoute);
app.use('/customer', CustRoute);
app.use('/video/:id', VideoRoute);

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
    console.log('Running on port '+ port)
});

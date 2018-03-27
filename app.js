var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/*', function (req, res) {
// res.sendFile(path.join(__dirname,'index.html'))
res.send('respond with a resource');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});

console.log(app.get('env'));
if (app.get('env') == 'development'){
    app.listen(3000, function () {
    console.log('Example listening on port 3000!');
    })
}else{
    app.listen(8080, function () {
    console.log('Example listening on port 8080!');
});
}
module.exports = app;
// let env = process.env.NODE_ENV || 'development';
// //env = 'prod';
// if (env === 'development') {
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/OlamApp';
// } else if (env === 'test') {
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/OlamAppTest';
// }/* else if (env === 'prod') {
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://heroku_769tw7vc:8otrno9t2318l60l2hv2k3cfba@ds133290.mlab.com:33290/heroku_769tw7vc';
// }*/
const express = require('express');
const bodyParser = require('body-parser');

// const port = process.env.PORT;

// const db = require('./db/mongoose');
// const app = express();

app.use(express.static(__dirname + '/public'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({e: err});
});

app.listen(port, (e) => {
    if (!e) {
        console.log(`app started on port : ${port}`)
    }
});

module.exports = app;

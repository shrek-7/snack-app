require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT;

const food = require('./routes/food');
const user = require('./routes/user');

const db = require('./db/mongoose');
const app = express();

app.use(bodyParser.json());

//all the api calls
app.use('/api/food', food);
app.use('/api/user', user);


// to load the index.html from public
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

/**
 * Created by Rubel on 07/01/18.
 */
const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;

mongoose.connect(mongodbURI,function(err){
    if (err) throw err; 
    console.log('Successfully connected');
});

module.exports = {mongoose};
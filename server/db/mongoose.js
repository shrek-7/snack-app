/**
 * Created by Rubel on 07/01/18.
 */
const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;

var fs = require('fs');

const { Food } = require('./../model/food');

mongoose.connect(mongodbURI,function(err){
    if (err) throw err; 
    console.log('Successfully connected');

    // var roll = new Food({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: "eggRoll",
    //     descirption: "roll",
    //     votes: 12
    // });

    // roll.img.data = fs.readFileSync(__dirname + '/../images/egg-roll.jpg');
    // roll.img.contentType = 'image/png';

    // roll.save(function(err) {
    //     if (err) throw err;
     
    //     console.log('food successfully saved.');
    // });

});

module.exports = {mongoose};
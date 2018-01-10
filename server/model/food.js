/**
 * Created by Rubel on 08/01/18.
 */
const mongoose = require('mongoose');

var foodSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    description : String,
    image: Buffer,
    votes: Number,
    created: { 
        type: Date,
        default: Date.now
    }
});

var Food = mongoose.model('Food', foodSchema);
module.exports = { Food };
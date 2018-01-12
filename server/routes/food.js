/**
 * Created by Rubel on 09/01/18.
 */

const express = require('express');
const router = express.Router();
const _ = require('lodash');


const { Food } = require('./../model/food');


//ruturn the list of all the foods

router.get('/', function(req, res){
    Food.find(function (err, foods) {
        if (err) return console.error(err);
        console.log(foods);
    })
});

//export this router to use in our index.js
module.exports = router;
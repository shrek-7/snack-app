/**
 * Created by Rubel on 09/01/18.
 */

const express = require('express');
const router = express.Router();
const _ = require('lodash');

var {authenticate} = require('./../middleware/authenticate');


const { Food } = require('./../model/food');
const { User } = require('./../model/user');


//ruturn the list of all the foods
router.get('/', function(req, res){
    Food.find(function (err, foods) {
        if (err) {
            res.send(err);
            return console.error(err);
        }
        res.json(foods);
    })
});

// api to add an food item to food list
router.post('/', function(req, res){
    var food = new Food(req.body);
    food.save();
})

// api to upvote a food item
router.put('/upvote', authenticate, (req, res) => {
    var user = req.user;
    if(user.upvotedFoodItem){
        Food.findById(user.upvotedFoodItem, function(err, food1) {
            if (err) throw err;
             
            food1.votes = food1.votes - 1;
            food1.save(function(err) {
                if (err) throw err;
                console.log("food votes updated successfully");
            });
            Food.findById(req.body.id, function(err, food2) {
                if (err) throw err;
        
                food2.votes = food2.votes + 1;
                food2.save(function(err) {
                    if (err) throw err;
                    console.log("food votes updated successfully");
                })

                user.upvotedFoodItem = req.body.id;
                user.save(function(err) {
                    if (err) throw err;
                    console.log("upvoted item updated for the current user");
                })
            })
        });
    }
    else{
        Food.findById(req.body.id, function(err, food2) {
            if (err) throw err;
    
            food2.votes = food2.votes + 1;
            food2.save(function(err) {
                if (err) throw err;
                console.log("food votes updated successfully");
            })

            user.upvotedFoodItem = req.body.id;
            user.save(function(err) {
                if (err) throw err;
                console.log("upvoted item updated for the current user");
            })
        })
    }

    res.send("success");
    

})


//export this router to use in our app.js
module.exports = router;
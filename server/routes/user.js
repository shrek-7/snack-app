/**
 * Created by Rubel on 22/01/18.
 */

const express = require('express');
const router = express.Router();
const _ = require('lodash');

var {User} = require('./../model/user');
var {authenticate} = require('./../middleware/authenticate');


//registering the user for first time
router.post('/', function(req, res){
    var body = _.pick(req.body, ['email', 'password', 'firstName', 'lastName']);
    body.isAdmin = false;
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

//login the user with cradentials and generating token based on password and secret text
router.post('/login', (req,res) => {
    var body = _.pick(req.body, ['email','password']);
    
    User.findByCredentials(body.email, body.password).then((user) => {
        user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        })
    }).catch((e) => {
        res.status(400).send("email not registered");
    })
})

//logout the user by removing the token
router.delete('/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }).catch((e) => {
        res.status(400).send();
    })
})

//information about the user himself with token info
router.get('/me', authenticate, (req, res) => {
    res.send(req.user);
})

//export this router to use in our index.js
module.exports = router;
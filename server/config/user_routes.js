const mongoose = require('mongoose')
var User = mongoose.model('User')
users = require('../controllers/users')

module.exports = function (app) {
    app.get('users', function (req, res) {
        users.allusers(req, res)
    })
    app.post('login', function(req,res){
        users.login(req,res);
    })
    app.post('register', function(req,res){
        users.createuser(req,res)
    })

}
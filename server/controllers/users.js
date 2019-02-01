var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
    allusers: function (req, res) {
        User.find({}, function (err, data) {
            if (err) {
                console.log("Returned error", err);
                res.json({ message: "Error", error: err })
            }
            else {
                console.log("----------Line 12------------")
                req.session.userid = res1._id
                id = req.session.userid
                res.json({ message: "Success", data: data })
                console.log("----------Line 14------------")
            }
        });
    },
    createuser: function (req, res) {
        console.log("---------------------------------------")
        console.log("POST DATA", req.body)
        var user = new User({ first_name: req.body.first_name, last_name: req.body.Last_name, email: req.body.email, password: req.body.password, password_confirm: req.body.password_confirm });
        user.save(function (err) {
            if (err) {
                console.log(err)
                console.log('Check to see if all the information was correcty input')
            }
            else {
                console.log(user)
                res.json({ message: "User successfully created", user: user })
            }
        })
    },
    login: function (req, res) {
        console.log(req.body)
        User.findOne({ username: req.body.username },
            (function (err1, res1) {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                console.log(err1, res1);
                if (!res1) {
                    console.log('Something Went Wrong');
                    res.json({ errors: "User not Found", message: "Error" })
                }
                else {
                    bcrypt.compare(req.body.password, res1.password,
                        function (err2, res2) {
                            if (res2 == false) {
                                console.log(err2);
                                res.json({ message: "Error" })
                            }
                            else {
                                console.log('Login Successful');
                                req.session.userid = res1._id
                                console.log(req.session.userid)
                                res.json({ message: "Success" });
                            }
                        })
                }
            })
        )
    },

}
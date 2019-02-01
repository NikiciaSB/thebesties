var mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');
var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: [true, 'Please enter your first name'] },
    last_name: { type: String, required: [true, 'Please enter your last name'] },
    username: { type: String, required: [true, 'Please enter a username'], unique: [true, 'Username is already taken.'] },
    email: { type: String, required: [true, 'Please enter your email.'], unique: [true, 'Email is already taken.'] },
    password: {
        type: String, required: [true, 'Password is required'], minlength: [8, 'Password must be between 8-20 characters'], maxlength: [32, 'Password must be between 8-32 characters'], validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{2,32}/.test(value);
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    password_confirm: {
        type: String, required: [true, 'Password confirmation required.'], validate: {
            validator: function (value) {
                return value == this.password;
            }, message: "Passwords must match."
        }
    }
}, { timestamps: true });

UserSchema.pre('save', function(done){
    var hashedpw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    this.password = hashedpw;
    this.password_confirm = hashedpw;
    done();
;})
var User = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: 40,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Please enter a Valid Email"
        }
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                });
            },
            message: 'Password must contain 1 Uppercase, 1 Lowercase, 1 Number & 1 Symbol',
        },
    },
});

userSchema.pre('save',async function(next){
    // if password is not modified we dont need to hash the password again
    if (!this.isModified('password')) next();
    // it is modified hash the password again
    this.password = await bcrypt.hash(this.password,12)
})

// NOTE this keyword points to the document we are going to save in the DB

const User = mongoose.model('User', userSchema);
module.exports = User;
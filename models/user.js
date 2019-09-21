const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true, 
        minlength: 3,
        maxlength: 15,
        unique: true
    },
    name: {
        type: String, 
        required: true, 
        minlength: 3,
        maxlength: 1000
    },
    password: {
        type: String, 
        required: true, 
        minlength: 5, 
        maxlength: 1000
    }
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id}, config.get('jwtPrivateKey'));
    return token;
};

const User = mongoose.model('User', userSchema); 

function validateUser(user){
    const schema = {
        userName: Joi.string().min(3).max(15).required(),
        name: Joi.string().min(3).max(1000).required(),
        password: Joi.string().min(5).max(1000).required()
    };
    return Joi.validate(user, schema);
};

exports.User = User;
exports.validate = validateUser;
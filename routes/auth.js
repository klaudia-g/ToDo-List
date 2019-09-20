const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res)=>{
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ userName: req.body.userName })
  if (!user) return res.status(400).send('Invalid user name.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid password');
    
    const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'));

    res.send(token);
});

function validate(req){
    const schema = {
        userName: Joi.string().min(3).max(15).required(),
        password: Joi.string().min(5).max(1000).required()
    };
    return Joi.validate(req, schema);
};


module.exports = router;
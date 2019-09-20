const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res)=>{
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ userName: req.body.userName })
  if (user) return res.status(400).send('Username already registered');

  user = new User(_.pick(req.body, ['userName', 'name', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(_.pick(user, ['_id', 'userName', 'name']));
});

module.exports = router;




// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

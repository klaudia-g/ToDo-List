const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res)=>{
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ userName: req.body.userName })
  if (user) return res.status(400).send('Username already registered');

  user = new User({
    userName: req.body.userName,
    name: req.body.name,
    password: req.body.password
  });

  await user.save();
  res.send(user);
});

module.exports = router;




// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

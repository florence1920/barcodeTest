var express = require('express');
var router = express.Router();
const User = require('../models/User.js');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let checkUser = req.query;
  let check = {
    auth : false,
    goodsNumber : 0
  }
  await User.findOne({userName : checkUser.userName, phoneNumber : checkUser.phoneNumber, goodsNumber : checkUser.goodsNumber})
  .then( user => {
    if(user != null){
      check.auth = true;
      check.goodsNumber = user.goodsNumber;
    }
  })
  res.json(check);
});

module.exports = router;

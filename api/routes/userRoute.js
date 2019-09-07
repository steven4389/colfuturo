const express = require('express');
const router = express.Router();
const user= require('../models/user')

router.get('/', async (req, res)=>{
    console.log()
    const users= await user.find()
    res.json(users);              
});

router.post('/', async (req, res)=>{
    
   const User = new user(req.body);
   await User.save();
   res.json({
        'status': "user saved"
   })
});

module.exports = router;
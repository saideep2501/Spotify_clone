// server/routes/auth.js or similar
const express = require('express');
const router = express.Router();  // this creates a mini Express router
const User = require('../models/User'); 
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt'); 
const SECRET_KEY = "mysecret"; 

router.post('/check-email', async (req, res) => {
  const { email } = req.body;
  try{
      const exUser= await User.findOne({email})
      if(exUser){
        return res.status(400).json({msg : "User already exists"});
      }
    res.json({msg:"User is available"});
  }catch(err){
    res.json({msg:err.message});
  }
});
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  
  try {
      const hashsedPassword=await bcrypt.hash(password,10);
      const newUser = new User({email,password:hashsedPassword});
      await newUser.save();
      res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error saving user" });
  }
});

router.post('/login', async (req,res)=>{
  const {email,password}=req.body;
  console.log("Received login:", email, password);
  try{
    const userExist= await User.findOne({email});
    if(!userExist){
      return res.status(400).json({msg:"Invalid"});
    }
    // compare plain password with hashed one
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }
  // create JWT token
    const token = jwt.sign({ id: userExist._id, email: userExist.email }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ msg: "Login Success", token });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
module.exports=router;

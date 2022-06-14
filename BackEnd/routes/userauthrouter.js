const express = require('express')
const router = express.Router();
const registerData = require('../model/registermodel')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const checkAuth=require('../middleware/check-auth')
function verifyToken(req,res,next){

  if(!req.headers.authorization)
  {

  return res.status(401).send('Unauthorized user');
}
let token= req.headers.authorization.split(' ')[1];
if(token==null){
  return res.status(401).send('Unauthorized user');
}
let payload=jwt.verify(token, 'ICTAcademy');
console.log(payload)
if(!payload){
  return res.status(401).send('Unauthorized user');
}
req.userId=payload.subject
next()
  }

router.post('/register', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.json({ success: false, message: "Hashing issue" })
    }
    else {
      const user = new registerData({
        name: req.body.name,
        email: req.body.email1,
        userrole: req.body.userrole,
        password: hash
      })
      user.save()
        .then((result) => {

          res.json({ success: true, message: "User Created" })
        }).catch(err => {
          if (err.code === 11000) {

            return res.json({ success: false, message: "Email id alredy exists" })


          }
          return res.json({ success: false, message: "Authentication Failed" })

        })
    }
  })


});

router.post('/login', (req, res) => {
  //res.json("Hai");
  registerData.find({ email: req.body.email1 })
    .exec()
    .then((result) => {
      if (result.length < 1) {
        return res.json({ success: false, message: "user not found" })
      }
      const user = result[0];
      bcrypt.compare(req.body.password,user.password,(err, ret) => {
        if (ret) {
          let userrole=user.userrole;
          let username=user.name;
          const payload={
            userid:user._id
          }
          const token=jwt.sign(payload,'ICTAcademy');
          return res.json({ success: true, message: "Login successful",userrole:userrole,token:token,username:username})
          
        }
        else {
          return res.json({ success: false, message: "Password not matched" })
        }
      })
    }).catch(err => {
      res.json({ success: false, message: "Auth Failed" })
    });
})

router.get('/seller', verifyToken, (req, res) => {
  const userId = req.userData.userId
  

  registerData.findById(userId)
      .exec()
      .then((result) => {
          res.json({succes: true, data:result})
      }).catch(err => {
          res.json({succes: false, message: "Auth Failed"})
      })
    
})
router.get('/buyer', checkAuth, (req, res) => {
  const userId = req.userData.userId
  

  registerData.findById(userId)
      .exec()
      .then((result) => {
          res.json({succes: true, data:result})
      }).catch(err => {
          res.json({succes: false, message: "Auth Failed"})
      })
    
})



module.exports = router;
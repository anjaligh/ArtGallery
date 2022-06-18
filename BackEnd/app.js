const express = require('express');
const mongoose = require('mongoose');

const PaintingData = require('./src/model/PaintingData');
const cartData = require('./model/cartModel');
const orderData= require('./model/orderModel')
const cors = require('cors');
const multer  = require('multer');
const bodyparser = require('body-parser');
const userauth = require('./routes/userauthrouter');

var app = new express;

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userauth);

// const storage=multer.diskStorage({
//     destination:(req,files,cb)=>{
//         cb(null,path.join(_dirname,'../','FrontEnd/src/assets/images'));
//     },
//     filename:(req,file,cb)=>{
// console.log(file);


// const image=file.originalname;
// console.log(image);

// //cb(null,Date.now()+path.extname(file.originalname));
// cb(null,image);

//     }
// })
// const upload=multer({storage:storage});

app.get('/mural', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    PaintingData.find({ category: 'mural' })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});


app.get('/abstract', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    PaintingData.find({ category: 'abstract' })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});

app.get('/watercolor', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    PaintingData.find({ category: 'watercolor' })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});

app.get('/pastel', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    PaintingData.find({ category: 'pastel' })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});

app.get('/acrylic', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    PaintingData.find({ category: 'acrylic' })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});

app.get('/charcoal', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    PaintingData.find({ category: 'charcoal' })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});
app.get('/getMyPaintings/:usermail',(req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const mail=req.params.usermail
    PaintingData.find({ "email": mail })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});
app.get('/getMyCart/:usermail',(req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const mail=req.params.usermail
    cartData.find({ "buyeremail": mail })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});
app.get('/getMyOrders/:usermail',(req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const mail=req.params.usermail
    orderData.find({ "buyeremail": mail })
        .then((paintings) => {
            console.log(paintings)
            res.send(paintings)
        });
});
app.get('/deletemycart/:usermail/:paintingname1',(req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const mail=req.params.usermail
    const painting=req.params.paintingname1
    console.log("deleteconsole"+mail)
    cartData.findOneAndDelete({ "buyeremail": mail }, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted User : ", docs);
        }
    })
    PaintingData.findOneAndDelete({ "name": painting }, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted User : ", docs);
        }
    })

});

app.post('/addwork',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log('hello backend')
    console.log(req.body);
    var newWork={
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        address:req.body.address,
        artistimage:req.body.artistimage,
        paintingname:req.body.paintingname,
        category:req.body.category,
        image:req.body.image,
        price:req.body.price,
        description:req.body.description,
        dimension:req.body.dimension
    }
    var newPainting=new PaintingData(newWork);
    newPainting.save();
})
app.post('/addcart',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log('hello backend')
    console.log("buyeremail"+req.body.buyeremail);
    var newcartdata={
        buyeremail:req.body.buyeremail,
        paintingname:req.body.paintingname,
        category:req.body.category,
        image:req.body.image,
        price:req.body.price,
        dimension:req.body.dimension
    }
    var mynewCart=new cartData(newcartdata);
    mynewCart.save();
})
app.post('/addorders',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log('hello backend')
    console.log("buyeremail"+req.body.buyeremail);
    var neworderdata={
        buyeremail:req.body.buyeremail,
        paintingname:req.body.paintingname,
        category:req.body.category,
        image:req.body.image,
        price:req.body.price,
        dimension:req.body.dimension
    }
    var mynewOrder=new orderData(neworderdata);
    mynewOrder.save();
})

app.listen(3000, function () {
    console.log('listening to port 3000')
});
const express = require('express');
const mongoose = require('mongoose');
const PaintingData = require('./src/model/Paintingdata');
const PaintingData = require('./src/model/PaintingData');
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

const storage=multer.diskStorage({
    destination:(req,files,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
console.log(file);

const image=file.originalname;
console.log(image);

//cb(null,Date.now()+path.extname(file.originalname));
cb(null,image);

    }
})
const upload=multer({storage:storage});

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
app.listen(3000, function () {
    console.log('listening to port 3000')
});
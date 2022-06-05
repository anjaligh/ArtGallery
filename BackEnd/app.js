const express = require('express');
const PaintingData = require('./src/model/Paintingdata');
const cors = require('cors');
const bodyparser = require('body-parser');

var app = new express;

app.use(cors());
app.use(bodyparser.json());

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
    PaintingData.find({ category: 'Watercolor' })
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

app.listen(3000, function () {
    console.log('listening to port 3000')
});
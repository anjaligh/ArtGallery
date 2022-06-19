const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoArt');
const Schema = mongoose.Schema;



var CartSchema = new Schema({
    buyeremail : String,
    paintingname : String,
    category : String,
    price : String,
    dimension : String,
    image : String

});

var cartData= mongoose.model('cart', CartSchema);                    

module.exports = cartData;
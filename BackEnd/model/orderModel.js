const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoArt');
const Schema = mongoose.Schema;



var OrderSchema = new Schema({
    buyeremail : String,
    paintingname : String,
    category : String,
    price : String,
    dimension : String,
    image : String

});

var orderData= mongoose.model('order', OrderSchema);                    

module.exports = orderData;
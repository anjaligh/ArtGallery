const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoArt');
// mongoose.connect('mongodb+srv://anjali:anjali93@anjali.5ol6pxz.mongodb.net/?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
var PaintingSchema=new Schema({
    name : String,
    artist : String,
    category : String,
    diamension : String,
    price : String,
    image : String
});
var PaintingData=mongoose.model('painting',PaintingSchema);
module.exports=PaintingData;
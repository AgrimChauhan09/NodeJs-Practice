
// in this file we define our models and schema

// and what need of this file because  haar ek collection ke liye ek file chiye
// bcz collections alg alg ho skti hai like produts,user,etc etc 
// e-commerce ->> prodduct
//            |
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    cato:String
});


module.exports=mongoose.model('product',productSchema);
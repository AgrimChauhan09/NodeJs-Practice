const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-commerce');

   const productSchema = new mongoose.Schema({
    name: String, 
    price: Number, 
    cato: String
    });


// Main function to handle database operations
const saveindb = async () => {
    const ProductModel = mongoose.model('product', productSchema);
    const data = new ProductModel({
        name: "m8",
        price: 200,
        cato: "mobile"
    });
    const result = await data.save();
    console.log(result);
}                           



const updatedb=async ()=>{
    const product=mongoose.model('product', productSchema);
    let data=await product.updateOne(
        {name:"agrim"},
        {$set:{price:700}}
    )
    console.log(data);
    
}

const deletedb=async()=>{
    const product=mongoose.model('product', productSchema);
    let data=await product.deleteOne({name:"agrim"});

    console.log(data);
    
}


const finddb=async()=>{
    const product=mongoose.model('product', productSchema);
    let data=await product.findOne();

    console.log(data);
    
}

finddb();
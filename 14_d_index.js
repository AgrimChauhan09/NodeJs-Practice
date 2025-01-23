const express=require('express');

require('./14_b_config')

const product=require('./14_c_products')

const app=express();
app.use(express.json)
// app.post('/', async (req,res)=>{
// let data=new product(req.body);
// let result= await data.save();
//    console.log(req.body); 
//     res.send(result);
//     res.send("result");
// });   

// app.get("/list",async  (res,req)=>{
//     let data=await product.find();
//     res.send(data);
// })


// app.delete('/delete/:_id',async  (res,req)=>{
//     console.log(req.params);
//     let data=await product.deleteOne();
//     res.send(data);
// })



app.get("/search/:key",async (res,req)=>{
    console.log(req.params.key);
    
    let data=await product.find()
    res.send(data);

})









  
app.listen(5500);
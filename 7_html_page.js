//how we can access the public folder 

const express=require('express')
const path=require('path');
const app=express();

const publicpath=path.join(__dirname,'public');
console.log(publicpath);

app.use(express.static(publicpath));
 

app.listen(5000)
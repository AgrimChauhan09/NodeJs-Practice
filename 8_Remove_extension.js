//how we can access the public folder 

const express=require('express')
const path=require('path');
const app=express();

const publicpath=path.join(__dirname,'public');
console.log(publicpath);

// app.use(express.static(publicpath));
app.get('',(_,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})

app.get('/help',(_,res)=>{
    res.sendFile(`${publicpath}/help.html`)
})

app.get('*',(_,res)=>{
    res.sendFile(`${publicpath}/page_not_valid.html`)
})

app.listen(5000); 
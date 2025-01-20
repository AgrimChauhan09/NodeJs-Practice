//how we can access the public folder 

const express=require('express')
const path=require('path');
const app=express();

const publicpath=path.join(__dirname,'public');
console.log(publicpath);


app.set('view engine', 'ejs');


app.get('',(_,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})

app.get('/profile',(_,res)=>{
    const user={
        name:'agrim chuahan', 
        email:'agrim@.gmail.com' 
    }
    res.render('profile',{user});
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
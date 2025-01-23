const express = require('express')
const EventEmitter=require('events');
const { log } = require('console');

const app=express();

const event=new EventEmitter();


let count=0;

// event genrate hoga
app.get("/",(req,res)=>{
    res.send("called");
    event.emit("countAPI");
});
// or event handle yaha hoga means capture hoga 
event.on("countAPI",()=>{
    count++;
    console.log("event called:-",count)
})



app.get("/search",(req,res)=>{
    res.send("search api called");
    event.emit("countAPI");

});


app.get("/update",(req,res)=>{
    res.send("update api call");
    event.emit("countAPI");

});



app.listen(4000);
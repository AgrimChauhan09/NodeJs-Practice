// make basic server
// function as parameter in node
// arrow funtion
// get outout on browser



const http=require('http')

//one way to create server without arrow function
function datacontrol(req,res){
    res.write("<h1>hello wordd</h1> ")
    res.end();
}
http.createServer(datacontrol).listen(4500);


// second way to create server with arrow function
// http.createServer((req,res)=>{
//     res.write("<h1>hello word</h1> ")
//     res.end();
// }).listen(4500);

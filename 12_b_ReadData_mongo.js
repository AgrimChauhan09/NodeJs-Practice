const dbconnect=require('./12_c_mongo')



// we handle the promises in 2 diff ways

// dbconnect().then((res)=>{
//     res.find().toArray.then((data)=>{
//         console.warn(data)
//     })
// })


const main=async ()=>{
    let data=await dbconnect();
    data =await data.find().toArray();
    console.warn(data);
}
main();
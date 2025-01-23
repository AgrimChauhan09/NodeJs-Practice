const dbconnect=require('./12_c_mongo')


const deletedata=async()=>{
    let data = await dbconnect();
    let result=await data.deleteOne({
        name:'ce 2 5g'
    })
    console.warn(result);
    if(result.acknowledged){
      console.log("record delete");
    }
    
}


deletedata();
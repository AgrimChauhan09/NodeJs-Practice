const app=require('./app')

const arr=[2,3,4,5,6,5,3];

// console.log(app.x)
// console.log(app.z())

// filter automatic loop bhi chlayega

let result=arr.filter((item)=>{
    // console.log(item)
    return item>=3
})

console.log(result)

const mongoose=require('mongoose')

let schema=mongoose.Schema({

    name:{type:String,required:true},
    creationTime:{type:Date,default:Date.now()},
    timeRequired:{type:Number,default:8},
    status:{type:String,default:"Todo"}
})

let Task=mongoose.model('To-DoTask',schema)

module.exports=Task;
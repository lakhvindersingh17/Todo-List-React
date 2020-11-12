
let Task=require('../models/taskModel')


let getTasks=async (req,res)=>{

    try{
        let data= await Task.find({})
        res.json(data)
    }
    catch{
        res.status(400).send('Error Couldnt Fetch data')
    }
}

let getSortedTasks=async (req,res)=>{

    try{
        let data= await Task.find({}).sort({creationTime:-1})
        res.json(data)
    }
    catch{
        res.status(400).send('Error Couldnt Fetch data')
    }
}

let getTask=async (req,res)=>{

    try{
        let data= await Task.findById(req.params.id)
        res.json(data)
    }
    catch{
        res.status(400).send('Error Couldnt Fetch data')
    }
}


let addTask=async (req,res)=>{

    try{
        await Task.create(req.body)
        res.status(200).send('Succesfully Added')
    }
    catch{
        res.status(400).send("Unsuccesful")
    }
}

let updateStatus=async (req,res)=>{

    try{
        await Task.findByIdAndUpdate(req.params.id,{$set:{status:req.params.status}})
        res.status(200).send("Succesfully Updated")

    }
    catch{
        res.status(400).send("Unsuccesful")
    }
}


let updateTask=async (req,res)=>{

    try{
        if(req.query.timeRequired!=undefined)
    
            await Task.findByIdAndUpdate(req.params.id,{$set:{name:req.query.name, 
                                                timeRequired:req.query.timeRequired}})
        else
            await Task.findByIdAndUpdate(req.params.id,{$set:{name:req.query.name}})
        res.status(200).send("Succesfully Updated")

    }
    catch{
        res.status(400).send("Unsuccesful")
    }
}




let removeTask=async(req,res)=>{

    try{
        await Task.findByIdAndRemove(req.params.id)
        res.status(200).send('Succesfully Deleted')
    }
    catch{
        res.status(400).send('Unsuccesful')
    }
}

module.exports={ addTask,getTasks,removeTask,updateStatus ,getTask,updateTask,getSortedTasks}
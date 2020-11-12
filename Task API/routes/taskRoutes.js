const express=require('express')

const router=express.Router()
const connector=require('../connections/taskConnector')

router.get('/Task',connector.getTasks)

router.get('/Task/Sorted',connector.getSortedTasks)

router.post('/Task',connector.addTask)

router.get('/Task/:id',connector.getTask)

router.patch('/Task/:id/:status',connector.updateStatus)

router.patch('/Task/:id/',connector.updateTask)

router.delete('/Task/:id',connector.removeTask)

module.exports=router;
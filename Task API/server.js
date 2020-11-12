const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const taskRoutes=require('./routes/taskRoutes')

const port=5000;
const app=express()


mongoose.connect('mongodb+srv://lakhvinder:lakhvinder5738@cluster0.msro6.mongodb.net/<dbname>?retryWrites=true&w=majority'

,{useNewUrlParser:true}).then(()=>console.log('Database Connected')).catch(()=>console.log('Not able to Connect to Database'))

let allowCrossDomain = (req, res, next)=> {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json())
app.use('/',taskRoutes)

app.listen(port,()=>console.log("Server Connected"))











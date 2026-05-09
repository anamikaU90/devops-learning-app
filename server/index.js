const express = require('express');
const cors = require('cors');
const app=express();

app.use(cors());
app.get('/api/health',(req,res)=>{
    res.json({
        status:'ok',
        message:'healthy',
        timestamp:Date.now().toString()
    });
});

app.get('/api/devices',(req,res)=>{
    res.json([{
        id:1,name:'device1',status:'online',cpu:10,ram:20,disk:30},
    {id:2,name:'device2',status:'offline',cpu:10,ram:20,disk:30},
{id:3,name:'device3',status:'online',cpu:10,ram:20,disk:30}]);      
    
    
});

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`listening on port ${port}`));
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app=express();

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://mongo_opt:123456@ds243728.mlab.com:43728/mongo_options',{
    useMongoClient:true
})
.then(()=>console.log('connected'))
.catch(err=>console.log(err));


const port = 4300;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
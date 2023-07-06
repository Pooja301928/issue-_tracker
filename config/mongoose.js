const mongoose = require('mongoose');
//const url = 'mongodb://127.0.0.1:27017/issueTracker';
const url = 'mongodb+srv://poojaparihar0501:HWfPoqiUjZ0oXBue@cluster0.ge7ameb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url);
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
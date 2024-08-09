const mongoose = require('mongoose');
const dotenv=require('dotenv').config()
const URL=process.env.DATABASE_URL
const connectToMongo = async()=>{
    try{
    await mongoose.connect(URL)
    .then(console.log("Connect to mongo Successfully"));
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectToMongo
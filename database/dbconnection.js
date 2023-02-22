const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const DB = process.env.MONGO_URL;

mongoose.connect(DB).then(()=>{
    console.log("Your connection is successfully")
})
.catch((e)=>{
    console.log("Your connection is fail")
})
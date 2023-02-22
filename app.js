require("dotenv").config();
const express  = require("express");
const db = require("./database/dbconnection")
const app  = express()

const port = process.env.PORT
const hbs = require("hbs")
const path = require("path")
const route = require("./routers/routes")
//view enginer setup 

const partials = path.join(__dirname,"./templates/partials")

app.set("view engine","hbs");
app.set("views",path.join("./templates/views"))


//partials setup

hbs.registerPartials(partials)

app.use(route)

app.listen(port, ()=>{
    console.log(`Your server start ${port}`);
})
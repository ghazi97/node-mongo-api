const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/simpleDB" , (error) =>{

if(!error)
{
    console.log("success connecting");
}
else
{
    console.log("error connecting to DB !");
}
});

const Course = require("./model/course.model");
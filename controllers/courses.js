const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("course");

router.get("/add", (req, res)=>{
res.render("add-course")
})

router.post("/add", (req, res)=>{

    //Settings
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFees = req.body.courseFees;
    course.courseID = Math.ceil(Math.random() * 100000000) + "";


    course.save((err, doc)=>{
      if(!err)
       { 
           //res.redirect("/course/list") 
           res.json({message : "Successful", status : "OK"})
        }
        else
        { res.send("Error Occured"); }
    })
})

router.get("/list", (req, res)=>{

    //Getting
    CourseModel.find((err, docs)=>{
        if(!err)
        {
            res.render("list", { data : docs})
        }
        else
        {
            res.send("ERROR !")
        }
    });
});

module.exports = router;

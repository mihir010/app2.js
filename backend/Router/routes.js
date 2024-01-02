const express = require("express");
const router = express.Router();
const empModel = require("../Models/EmpSchema");

router.post("/emp", async (req, res)=>{
    try{
        const newEmp = new empModel(req.body);
        const newRec = await newEmp.save();
        res.status(200).send("data added successfully");
    }
    catch(err){
        res.status(400).send(err);
    }
});
router.get("/emp/:id", async (req, res)=>{
    try{
        const getEmp = await empModel.findOne({id:req.params.id});
        res.status(200).send(getEmp);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get("/emp", async (req, res)=>{
    try{
        const getEmp = await empModel.find({});
        res.status(200).send(getEmp);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get("/emp/:id", async (req, res)=>{
    try{
        const getEmp = await empModel.findOne({id:req.params.id});
        res.status(200).send(getEmp);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.delete("/emp/:id", async(req, res)=>{
    try{
        console.log("deleting Employee#"+req.params.id);
        const deletedRecord = await empModel.findOneAndDelete({id:req.params.id});
        res.status(200).send(deletedRecord);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.put("/emp/:id", async(req, res)=>{
    try{
        console.log("updating Employee#"+req.params.id);
        const updatedRecord = await empModel.findOneAndUpdate({id:req.params.id}, {first_name:req.body.first_name, last_name:req.body.last_name, email:req.body.email}, {new:true});
        res.status(200).send("data successfully updated");
    }
    catch(e){
        console.log("errrrrrrrrrr");
        res.status(400).send(e);
    }
})

module.exports = router;
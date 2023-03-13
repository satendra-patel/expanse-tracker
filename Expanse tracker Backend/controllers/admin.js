const Expanse = require('../models/expanse');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

exports.postExpanse= async (req,res,next)=>{
    try{
        const expanse_name = req.body.expanse_name;
        const expanse_category = req.body.expanse_category;
        const amount = req.body.amount;
        const data= await Expanse.create({expanse_name:expanse_name, expanse_category:expanse_category, amount:amount})
        res.status(201).json({newUserDetail:data})
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
    
    
}

exports.getExpanses= async (req,res,next)=>{
    try{
        const expanses=await Expanse.findAll();
        res.status(200).json({allExpanses:expanses})
    }
    catch(error){
        console.log("Get expanse is failing",JSON.stringify(error));
        res.status(500).json({
            error:error
        })
    }
    
}

exports.deleteExpanse= async(req,res,next)=>{
    try{
        const uId=req.params.id;
        console.log(uId);
        await Expanse.destroy({where:{id:uId}});
        
        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
}
// exports.editExpanse= async(req,res,next)=>{
//     try{
//         const uId=req.params.id;
//         console.log(uId);
//         await Expanse.findByPk(uID);
//         const expanse_name = req.body.expanse_name;
//         const expanse_category = req.body.expanse_category;
//         const amount = req.body.amount;
//         const data= await Expanse.update({expanse_name:expanse_name, expanse_category:expanse_category, amount:amount})
//         res.status(201).json({newUserDetail:data})
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
    
// }
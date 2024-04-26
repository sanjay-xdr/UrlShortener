// import mongoose from "mongoose";
const mongoose=require("mongoose")
const { Schema } = mongoose;


const urlScheme =new Schema({

    shortId:{
        type:String,
        reduired:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },

    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true})


const Url=mongoose.model('url',urlScheme)


module.exports=Url
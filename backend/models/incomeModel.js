const { maxHeaderSize } = require('http')
const mongoose=require('mongoose')
const { type } = require('os')

const incomeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true
    },
    type:{
        type:String,
        default:'income'
    },
    date:{
        type:Date,
        default:Date.now,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true})

Income = mongoose.model('Income',incomeSchema)
module.exports=Income
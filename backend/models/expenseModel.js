const { maxHeaderSize } = require('http')
const mongoose=require('mongoose')
const { type } = require('os')

const expenseSchema=new mongoose.Schema({
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
        default:'expense'
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

Expense= mongoose.model('Expense',expenseSchema)
module.exports=Expense
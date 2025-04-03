
const expenseSchema=require('../models/expenseModel')
exports.addExpense= async (req,res)=>{
    const {title,amount,category,description,date}=req.body
    //use instance of incomeSchema from incomeModel
    const expense=expenseSchema({
        title,
        amount,
        type:'expense',
        category,
        description,
        date,
    })
    try{
        //validations
        if(!title||!amount||!category||!description||!date){
            return res.status(400).json({message:'All fields are required'})
        }
        if(amount<=0||!amount ==='number'){
            return res.status(400).json({message:'Amount must be a positive number'})
        }
        // console.log(expense)
        await expense.save()
        res.status(201).json({message:'Expense added successfully'})
    }
    catch(e){
        res.status(400).send(e)
}
}

exports.getExpenses=async(req,res)=>{
    try{
        const expenses=await expenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expenses)
    }
    catch(e){
        res.status(400).send(e)
    
}
}

exports.deleteExpense=async(req,res)=>{
    //req.params is an object in Express.js that contains the route parameters
    const {id}=req.params // using destructuring to extract the id value from the req.params object.
    console.log(id)
    try{
        await expenseSchema.findByIdAndDelete(id)
        res.status(200).json({message:'Expense deleted successfully'})
    }
    catch(e){
        res.status(400).send(e)
    }
}
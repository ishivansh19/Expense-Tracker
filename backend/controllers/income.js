
const incomeSchema=require('../models/incomeModel')
exports.addIncome= async (req,res)=>{
    const {title,amount,category,description,date}=req.body
    //use instance of incomeSchema from incomeModel
    const income=incomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        //validations
        if(!title||!amount||!category||!description||!date){
            return res.status(400).json({message:'All fields are required'})
        }
        if(amount<=0||!amount ==='number'){
            return res.status(400).json({message:'Amount must be a positive number'})
        }
        await income.save()
        res.status(201).json({message:'Income added successfully'})
    }
    catch(e){
        res.status(400).send(e)
}
}

exports.getIncomes=async(req,res)=>{
    try{
        const incomes=await incomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }
    catch(e){
        res.status(400).send(e)
    
}
}

exports.deleteIncome=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try{
        await incomeSchema.findByIdAndDelete(id)
        res.status(200).json({message:'Income deleted successfully'})
    }
    catch(e){
        res.status(400).send(e)
    }
}
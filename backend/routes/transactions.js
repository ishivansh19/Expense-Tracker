const router=require('express').Router()

router.get('/',(req,res)=>{
    res.send('Transactions')
})

module.exports=router
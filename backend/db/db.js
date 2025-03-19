const mongoose=require('mongoose')

const db=async()=>{try{
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URL)
    console.log('DB connected')
}
catch(e){
    console.log(e)
}
}

module.exports=db
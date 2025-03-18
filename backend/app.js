const express=require('express')
const cors=require('cors')
const app=express()

require('dotenv').config()
const port=process.env.PORT
//middlewares
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})


const server=()=> {
     app.listen(port,()=>console.log(`Server is running on port ${port}`))
}

server()
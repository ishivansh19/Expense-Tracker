const express=require('express')
const cors=require('cors')
const app=express()
const db=require('./db/db')
const readdirSync=require('fs').readdirSync

require('dotenv').config()

const port=process.env.PORT
//middlewares
app.use(cors())
app.use(express.json())

//routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require(`./routes/${route}`)))

app.get('/',(req,res)=>{
    res.send('Hello World')
})


const server=()=> {
    db()
     app.listen(port,()=>console.log(`Server is running on port ${port}`))
}

server()
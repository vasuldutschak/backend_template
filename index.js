const express=require("express")
const cors=require('cors')
const app=express()
const logger=require('morgan')
const {HTTP_STATUS_CODES} = require('./helpers')
require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const formatsLogger=app.get('env')==='development' ? 'dev':'short'
app.use(logger(formatsLogger))

app.use((req,res)=>{
    res.status(HTTP_STATUS_CODES.NOT_FOUND).json({message:HTTP_STATUS_CODES[HTTP_STATUS_CODES.NOT_FOUND]})
})

app.use((error,req,res,next)=>{
    const {status=HTTP_STATUS_CODES.NOT_FOUND,message=HTTP_STATUS_CODES[HTTP_STATUS_CODES.NOT_FOUND]}=error
    res.status(status).json({message})

})

module.exports=app
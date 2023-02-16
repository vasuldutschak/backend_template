const {isValidObjectId}=require('mongoose')
const {HTTP_STATUS_CODES} = require('../helpers')

const HttpError = require('../helpers/HttpError')
const VALID_MESSAGE="Invalid Id"
const isValidId=(req,res,next)=>{
    const {id}=req.params
    if (!isValidObjectId(id)) next(HttpError(HTTP_STATUS_CODES.NOT_FOUND,VALID_MESSAGE))
    next()
}

module.exports=isValidId
const HTTP_STATUS_CODES = require('./httpStatusCodes')
const MONGO_NAME_ERROR="MongoServerError"
const MONGO_STATUS_CODE=11000

const handleMongooseError=(error, data, next) => {
    const {name, code} = error
    error.status=(name===MONGO_NAME_ERROR && code===MONGO_STATUS_CODE) ? HTTP_STATUS_CODES.CONFLICT : HTTP_STATUS_CODES.BAD_REQUEST
    next()
}
module.exports=handleMongooseError
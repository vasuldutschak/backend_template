const {HttpError} = require("../helpers")
const {HTTP_STATUS_CODES} = require('../helpers')

const validateBody = schema => {
    const func = (req, res, next) => {
        const {error} = schema.validate(req.body)
        if (error) {
            next(HttpError(HTTP_STATUS_CODES.BAD_REQUEST, error.message))
        }
        next()
    }
    return func
}
module.exports=validateBody
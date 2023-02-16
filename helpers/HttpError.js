const HTTP_STATUS_CODES = require('./httpStatusCodes')
const HttpError = (status, message=HTTP_STATUS_CODES[status]) => {
    const error = new Error(message)
    error.status = status
    return error
}
module.exports = HttpError
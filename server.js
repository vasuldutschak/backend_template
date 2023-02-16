const app=require('./index')
const mongoose = require('mongoose')

const {DB_HOST,PORT=4000}=process.env
mongoose.set('strictQuery',true)
mongoose.connect(DB_HOST)
    .then(() =>app.listen(PORT))
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    })

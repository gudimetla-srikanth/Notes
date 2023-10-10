const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }

})
const noteModel = mongoose.model('notes', noteSchema)
module.exports = noteModel
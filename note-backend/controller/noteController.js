const noteModel = require('../models/noteModel.js')
const userModel = require('../models/userModel.js')

exports.createNote = async (req, res) => {
    try {

        const noteData = req.body;
        const data = await noteModel.create({
            email: noteData.email,
            title: noteData.title,
            desc: noteData.desc
        })
        if (data) {
            res.json({ success: true, data: data })
        } else {
            res.json({ success: false, message: "Note is not created" })
        }

    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}
exports.updateNote = async (req, res) => {
    try {
        const noteData = req.body;
        console.log(noteData)
        const data = await noteModel.findOneAndUpdate({ email: noteData.email, title: noteData.title }, { $set: { desc: noteData.desc } })
        console.log(data)
        if (data) {
            res.json({ success: true, data: data })
        } else {
            res.json({ success: false, message: "Note is not updated" })
        }

    } catch (e) {
        res.json({ success: false, message: e.message })
    }

}
exports.deleteNote = async (req, res) => {
    try {
        const noteData = req.params;
        const data = await noteModel.findOneAndDelete({
            email: noteData.email,
            title: noteData.title
        })
        if (data) {
            res.json({ success: true, data: data })
        } else {
            res.json({ success: false, message: "Note is not deleted" })
        }

    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}
exports.getNote = async (req, res) => {
    try {
        const noteData = req.params;
        const data = await noteModel.find({
            email: noteData.email
        })
        if (data) {
            res.json({ success: true, data: data })
        } else {
            res.json({ success: false, message: "Note is not created" })
        }

    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}
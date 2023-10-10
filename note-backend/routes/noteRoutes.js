const express = require('express')
const noteRouter = express.Router()
const { createNote, deleteNote, updateNote, getNote } = require('../controller/noteController')
noteRouter.post('/createnote', createNote)
noteRouter.put('/updatenote', updateNote)
noteRouter.delete('/deletenote/:email/:title', deleteNote)
noteRouter.get('/getnote/:email', getNote)

module.exports = noteRouter
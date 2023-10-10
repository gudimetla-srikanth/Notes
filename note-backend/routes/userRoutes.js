const express = require('express')
const userRouter = express.Router()
const { register, login, userauthentication } = require('../controller/userController')
userRouter.post('/register', register)
userRouter.get('/login', userauthentication, login)

module.exports = userRouter
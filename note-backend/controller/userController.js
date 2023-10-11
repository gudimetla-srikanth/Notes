
const userModel = require('../models/userModel')

exports.register = async (req, res) => {
    try {
        const userdata = req.body
        const data = await userModel.create({
            name: userdata.name,
            email: userdata.email,
            password: userdata.password
        })
        if (data) {
            res.json({ success: true, data: data })
        } else {
            res.json({ success: false, message: "registering not happened" })
        }

    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

exports.login = async (req, res) => {
    try {
        const userdata = req.body
        console.log(userdata)
        const data = await userModel.find({
            email: userdata.email,
            password: userdata.password
        })
        console.log(data)
        if (data) {
            res.json({ success: true, data: data })
        } else {
            res.json({ success: false, message: "login success happened" })
        }

    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}
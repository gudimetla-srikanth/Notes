const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(con => console.log("Database has started")).catch(err => console.log(err.message))
}

module.exports = connectDB
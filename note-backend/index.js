const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({ path: "./config/config.env" });
const app = express();
const connectDB = require('./config/database')
connectDB()
const noteRouter = require('./routes/noteRoutes.js')
const userRouter = require('./routes/userRoutes')
app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', noteRouter)
app.listen(process.env.PORT, () => {
    console.log(`port started ${process.env.PORT}`)
})
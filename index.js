import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/connectDB.js'
import booksRouter from './routes/booksRoute.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use('/api/books', booksRouter)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {

    let status = err.status || 500
    let message = err.message || 'Server error'

    return res.status(status).json({ success: false, error: message })
})
app.use((req, res) => {
    return res.status(404).json({ success: false, error: "Not Found" })
})
app.listen(PORT,  async () => {
    console.log(`Server started on PORT ${PORT}`)
   await connectDB()

})
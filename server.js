require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://admin:1234@cluster0.co4mq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))

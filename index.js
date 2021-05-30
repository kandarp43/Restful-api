const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const app = express()


app.use(cors())
app.use(express.json())
//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Database connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db')
)

app.listen(3000, () => console.log('server up'))

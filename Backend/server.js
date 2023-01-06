// import express
const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')
// controller import
const instaController = require('./controllers/insta-controller')
const postcontroller = require('./controllers/post-controller')
const commentController = require('./controllers/comment-controller')
require("dotenv").config()
require('./config/db.connection')

const { PORT, MONGODB_URI } = process.env
// const PORT = 4000;
  
// app middleware(express)
app.use(express.json())

// cors function
app.use(cors())
// morgan function
app.use(morgan('dev'))

// router middleware

app.use('/insta/post', postcontroller)
app.use('/insta/comment', commentController)
app.use('/insta', instaController)
// root router
app.get('/', (req,res) => res.redirect('/insta'))

app.listen(PORT, () => console.log(`Listening for client requests on port: ${PORT}`));
// npm i express nodemon
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//npm i body-parser
const bodyParser = require('body-parser');
// npm i cors allows you to get data from an api that is not on your server/domain
const cors = require('cors');
// gooten with npm i dotenv
require('dotenv/config')

//Middleware
// When the route posts is entered, this will fire

app.use(cors())
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

// Middleware for the router
app.use('/posts', postsRoute);
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('Home Page')
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, () => {
    console.log('connected to DB');
})

// How to start listening to the server
app.listen(5000);
console.log('listening on port 5000')
require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

// app.listen(SERVER_PORT, () => 
// console.log(`A wild house appeared: ${SERVER_PORT} `)
// )


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => 
    console.log(`A wild house appeared: ${SERVER_PORT} `)
    )
}).catch(err => console.log(err))
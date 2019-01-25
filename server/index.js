const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

const app = express();
app.use( bodyParser.json());
app.get('/api/product',controller.getProduct)
app.post('/api/product',controller.createProduct)

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db',dbInstance)
})

app.listen(4000, ()=>console.log('We are running here on port 4000'))
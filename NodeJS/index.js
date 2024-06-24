const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');

var cnController = require('./controllers/cnController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3010, () => console.log('Server started at port : 3010'));

app.use('/cannedFood', cnController);
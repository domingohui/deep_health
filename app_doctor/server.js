'use strict';

const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const bodyParser = require('body-parser');

const Attributes = require( './attributes');

// Static files
app.use('/static', express.static(path.join(__dirname + '/static')));
// Parse json
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.get('/get_attributes/', (req, res) => {
    res.json(Attributes.get_attributes_and_options());
});

app.post('/send_data/', (req, res) => {
    console.log(req.body)
    res.json();
});

app.listen(port, (err) => {
    if (err) {
        return console.log('An error occurred', err)
    }

    console.log(`Server is listening on port ${port}`);
});

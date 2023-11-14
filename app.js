const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const hand = require('./handle.js');
const bodyParser = require('body-parser');

const { name1, name2 } = { name1: 'name1', name2: 'name2' };
app.use(bodyParser.urlencoded({extended:false}));

app.get('/findidx', hand.func1);

app.get('/test' , hand.func2);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})       
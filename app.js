const express = require('express')
const app = express()
var config = require('./server/config/config');


app.get('/', (req, res) => res.send('Hello World2!'))

console.log('in app.js: ' + config.env);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
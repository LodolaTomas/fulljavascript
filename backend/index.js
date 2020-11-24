var express = require('express');
var app = express();
const users= require('./Class/usuario');
const mw= require('./Class/MW');

var bodyParser = require("body-parser");
app.use(bodyParser.json())

app.post('/', [mw.validateNull,users.agregar]);

app.listen(3000);
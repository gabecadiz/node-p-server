const express = require('express');

const app = express();

app.use(express.json()); //parsing application/json
app.use(express.urlencoded()); //parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

app.listen(3003);

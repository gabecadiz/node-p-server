const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const user = {
    name: 'Gabe',
    hobby: 'basketball'
  };
  res.send(user);
});

app.listen(3003);

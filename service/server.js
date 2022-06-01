const dotenv = require('dotenv');
dotenv.config;
const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const files = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../web/dist')));

app.get('/api/jwt', (req, res) => {
  console.log(`api/jwt called!\r\nrequest: ${ JSON.stringify(req) }`)
  res.json(req);
});

app.post('/api/verify', (req, res) => {
  const file = req.body.file;
  console.log('Verify invoked', file);
  files.push(file);
  res.json("file added");
});

app.get('/', (req,res) => {
  res.json({
    rout: '/',
    authentication: false
  });
  //res.sendFile(path.join(__dirname, '../web/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
});
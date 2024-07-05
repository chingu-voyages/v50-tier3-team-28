const express = require('express');
const app = express();
require('dotenv').config();
const dbConnection = require('./config/dbConnection');

dbConnection();
app.get('/', function (req, res) {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

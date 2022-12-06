const express = require('express');
const logger = require('morgan');

require('dotenv').config();

const app = express();

app.use(logger('dev'));

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
  });
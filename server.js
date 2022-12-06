const express = require('express');
const logger = require('morgan');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
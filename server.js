const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();
const dotenv = require('dotenv');

// Import routes
const authRoute = require('./routes/auth');


dotenv.config();

// Connect to db
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () =>
console.log('connected to db!')
);

// Middleware
app.use(express.json());


// Route Middleware
app.use('/api/user', authRoute);

app.use(logger('dev'));

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
  });
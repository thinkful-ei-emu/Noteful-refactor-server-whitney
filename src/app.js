require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const foldersRouter = require('./Folders/folders-router');
const notesRouter = require('./Notes/notes-router');

const app = express();

//
const morganOption = (NODE_ENV === 'production')
  ? 'common'
  : 'dev';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('You are connected!');
});

app.use('/api/folders', foldersRouter);
app.use('/api/notes', notesRouter);

app.use(function errorHandler(error, req, res, next) { // eslint-disable-line no-unused-vars
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./controllers/router.js');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const PORT = 3500;

app.use(cors());
app.use('/api', indexRouter);

app.use((err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(PORT, (error) =>{
  if(!error)
      console.log(`Server is Running Successfully at http://localhost:${PORT}`)
  else 
      console.log("Error occurred, server can't start", error);
  }
);


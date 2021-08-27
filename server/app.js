//dependencies
const express = require('express');
const dotenv = require('dotenv');

//internal imports
const { notFoundHandler, globalErrorHandler } = require('./middlewares/errorHandler');
const userRouter = require('./routers/userRouter');

//initial app
const app = express();

//init dot env
dotenv.config();

//default middlewares
app.use(express.json());

//routers
app.use('/user', userRouter);

//eror handlers
app.use(notFoundHandler);
app.use(globalErrorHandler);

//export the app
module.exports = app;

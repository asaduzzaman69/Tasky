//internal imports
const AppError = require('../../../natours/util/AppError');

function notFoundHandler(req, res, next) {
   next(new AppError(`Can't find ${req.originalUrl}`, 404));
}

function globalErrorHandler(error, req, res, next) {
   error.statusCode = error.statusCode || 500;
   error.status = error.status || 'error';
   res.status(error.statusCode).json({ status: error.status, message: error.message });
}

module.exports = { notFoundHandler, globalErrorHandler };

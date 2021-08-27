function notFoundHandler(req, res, next) {
   res.status(404).json({ error: 'Your requested URL was not found' });
}

function globalErrorHandler() {
   if (res.headerSent) {
      return next(error);
   }
   res.status(500).json({ error });
}

module.exports = { notFoundHandler, globalErrorHandler };

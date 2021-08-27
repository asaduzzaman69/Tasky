//dependencies
const mongoose = require('mongoose');

//internal imports
const app = require('./app');

app.listen(process.env.PORT, () => console.log(`${process.env.APP_NAME} is alive on localhost:${process.env.PORT}`));

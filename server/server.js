//internal imports
const app = require('./app');
const connectToDatabase = require('./database');

//database connection
connectToDatabase();

app.listen(process.env.PORT, () => console.log(`${process.env.APP_NAME} is alive on localhost:${process.env.PORT}`));

//dependencies
const mongoose = require('mongoose');

const databaseConnectionString = process.env.MONGODB_CONNECTION_STRING.replace(
   '<PASSWORD>',
   process.env.MONGODB_PASSWORD
);
//function for connect the app to database
function connectToDatabase() {
   mongoose
      .connect(databaseConnectionString)
      .then(() => console.log(`App is sucessfully connected to Database`))
      .catch((error) => console.log(`There was errors while connectiing to database`));
}

module.exports = connectToDatabase;

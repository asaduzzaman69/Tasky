//dependencies

//internal imports
const User = require('./../models/User');
const catchAsync = require('./../utils/catchAsync');

const userSignIn = catchAsync(async (req, res) => {
   /**
    * TODO: complete signin functionality
    * !Need to fix: Query runs before connecting to database
    */
});

const userSignUp = catchAsync(async (req, res) => {
   /**
    * TODO: complete signup functionality
    * !Need to fix: Query runs before connecting to database
    */
});

module.exports = { userSignIn, userSignUp };

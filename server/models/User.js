//dependencies
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
      name: { type: String, required: [true, 'A name must be required'] },
      username: { type: String, required: [true, 'An username must be required'], unique: true },
      email: { type: String, required: [true, 'An email must be required'], unique: true },
      password: { type: String, required: [true, 'A password must be required'] },
      phone: { type: Number, required: [true, 'A phone must be required'] },
   },
   { timestamps: true }
);

//create user model
const User = mongoose.model('User', userSchema);

module.exports = User;

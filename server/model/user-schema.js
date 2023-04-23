const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, lowercase: true, unqiue: true, index: true },
    email: { type: String, required: true, trim: true, lowercase: true, unqiue: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true }
})

const user = mongoose.model('user', userSchema);
module.exports = user;
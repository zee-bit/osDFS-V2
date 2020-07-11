const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    id: { type: Number, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhoneNo: { type: String, required: true }
})

module.exports = mongoose.model('userReg', userSchema);
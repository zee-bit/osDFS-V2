const mongoose = require('mongoose');

const schema = mongoose.Schema;

const eventSchema = new schema({
    id: { type: Number, required: true },
    eventName: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhoneNo: { type: String, required: true }

})

module.exports = mongoose.model('eventReg', eventSchema);
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    linkdinProfile: { type: String, required: true },
    githubProfile: { type: String, required: true },
    cvLink: { type: String, required: true },
    team: { type: String, required: true },
    university: { type: String, required: true },
    city: { type: String, required: true },
    leadUs: { type: String, required: true }

})

module.exports = mongoose.model('userReg', userSchema);
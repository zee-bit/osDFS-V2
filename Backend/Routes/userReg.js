const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require('../Models/userReg');
let userID = 1000;

router.post('/newUserEntry', [
    check('userEmail').isEmail()],

    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            if (errors.errors[0].param == "userEmail") {
                return res.json({ status: 422, message: "Invalid email address" })
            }
        }
        next();
    },

    function (req, res, next) {
        userID = userID + 1;
        const name = req.body.userName;
        const email = req.body.userEmail;
        const phone = req.body.phone;
        const lProfile = req.body.linkdinProfile;
        const gProfile = req.body.githubProfile;
        const cvLink = req.body.cvLink;
        const university = req.body.university;
        const city = req.body.city;
        const leadUs = req.body.canLeadUs;
        const team = req.body.team;
        const newUser = new User({ id: userID, name: name, email: email, phoneNo: phone, linkdinProfile: lProfile, githubProfile: gProfile, cvLink: cvLink, university: university, leadUs: leadUs, city: city, team: team });

        newUser.save(function (err, user) {
            if (err) return res.json({ status: 500, message: "Error on the server", err: err });
            else {
                return res.json({ status: 200, message: "Registered Successfully" });
            }
        });

    });

module.exports = router;
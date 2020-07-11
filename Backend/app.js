const express = require('express');
const mongoose = require('mongoose');
const config = require('./secret.json');


const app = express();


const server = app.listen(3600);

app.get('/', function (req, res, next) {
    console.log("Server Running");
    return res.json({ "status": 200 })
});


mongoose.connect(config.secretDB)
    .then(function (result) {
        console.log("DB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });
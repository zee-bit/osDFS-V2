const express = require('express');
const mongoose = require('mongoose');
const config = require('./secret.json');
const userRoutes = require('./Routes/userReg');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);

const server = app.listen(3600);

app.get('/', function (req, res, next) {
    console.log("Server Running");
    return res.json({ "status": 200 })
});

console.log(config.secretDB);
mongoose.connect(config.secretDB)
    .then(function (result) {
        console.log("DB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });
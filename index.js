const express = require('express');
const app = express();
require('dotenv').config({debug:true});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const router = require('./Route/web.js');
const User = require('./Model/User');
const { default: mongoose } = require('mongoose');
app.use(express.json());


mongoose.connect(process.env.URL);


app.use("/", router);
app.use('add/user', router);
app.use('/abc', router);
app.use('/store/user', router);
app.use('/list', router);
app.listen(process.env.PORT, console.log(`Connection Stablish Successfully.!`));
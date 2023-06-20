const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const indexRouter = require("./routes/index");
const userRouter = require('./routes/user');
const {connect} = require('./connectDb/db');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

//route
app.use('/', indexRouter)
// middlware
app.use('/farmacos', userRouter)
// mongodb
connect();


module.exports = app
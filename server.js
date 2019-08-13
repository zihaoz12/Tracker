const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load env
dotenv.config({path:'./config.env'});

const port = process.env.PORT || 8000;

const app = express();

//Dev logging 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Profile Routes
app.use('/api/v1/profile', require('./routes/profile'));


app.listen(port,()=>{
    console.log(`Server is running in ${process.env.PORT} mode on port: ${port}`);
})
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config()

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Base de datos ok")
    } catch {
        console.log("No se puede conectar con la db")
        
    }
}

module.exports = {connect}
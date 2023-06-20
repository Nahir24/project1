const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const farmacosSchema = new Schema({
    farmaco:{
        type: String,
        require: true        
    },
    marca:{
        type: String,
        require: true
    },
    laboratorio:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    descripcion:{
        type: String,
        
    }
});
const Farmaco = mongoose.model('Farmaco', farmacosSchema)
module.exports = {Farmaco}
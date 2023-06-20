const {Farmaco} = require('../models/farmacos')
const axios = require('axios')

class Controller {

    
    async listado  (req, res) {
        const farmaco = await Farmaco.find()
        res.status(200).json(farmaco);
    }

    async buscarId (req, res) {
        const farmaco = await Farmaco.findById(req.params.id)
        res.status(200).json(farmaco);
    }

    async buscarMarca (req, res) {
        const farmaco = await Farmaco.findOne(req.params.marca)
        res.status(200).json(farmaco);
    }

    async buscarFarmaco (req, res){
        const farmaco = await Farmaco.findOne(req.params.farmaco)
        res.status(200).json(farmaco);   
    }

    async buscarLaboratorio (req, res){
        const farmaco = await Farmaco.findOne(req.params.laboratorio)
        res.status(200).json(farmaco);
    }
 
    async crear (req, res) {
        try {
            const farmacoGuardar = new Farmaco(req.body);
            await farmacoGuardar.save();
            res.status(201).json(farmacoGuardar);
        } catch (error) {
            res.status(501).jason({msg: "no se pudo guardar, campo obligatorio: ", error})
        }
        
    }
    
    async editar  (req, res)  {
        await Farmaco.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({msg: "farmaco editado"});
    }
    
    async eliminar  (req, res)  {
        await Farmaco.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "farmaco eliminado"});
    }
}


module.exports = new Controller
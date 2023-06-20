const {Farmaco} = require('../models/farmacos');
const validar = async (req, res, next) =>{
    try {
        const farmaco = await Farmaco.findById(req.paramas.id);
        if (farmaco !== null) {
            next()
        } else {
            res.status(500).json({msg: "id invalido"})
            
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports= {validar}
const {check} = require('express-validator')
const checks = [
    check("farmaco")
        .not().isEmpty().withMessage("El campo farmaco es requerido para crear el producto")
        .isString(),
    check("marca")
        .not().isEmpty().withMessage("El campo marca es requerido para crear el producto")
        .isString(),
    check("laboratorio")
        .not().isEmpty().withMessage("El campo laboratorio es requerido para crear el producto")
        .isString(),
    check("precio")
        .not().isEmpty().withMessage("El campo precio es requerido para crear el producto")
        .isString()   
]

module.exports = checks
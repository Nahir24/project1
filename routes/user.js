const express = require("express")
const router = express.Router()
const controller = require('../controller/userController')
const {validar} = require('../middlwares/validarId')
const checks = require('../middlwares/checks')
const {validarChecks} = require('../middlwares/validarChecks')
const { apiFetch } = require("../controller/apiController")

router.get('/listado', controller.listado)
router.get('/listado/:id', validar, controller.buscarId)
router.get('/buscar/:marca', controller.buscarMarca)
router.get('/buscar/:farmaco', validar, controller.buscarFarmaco)
router.get('/buscar/:laboratorio', validar, controller.buscarLaboratorio)
router.post('/crear', checks, validarChecks, controller.crear)
router.put('/editar', validar, checks, validarChecks, controller.editar)
router.delete('/eliminar', validar, controller.eliminar)

router.get('/api', apiFetch)


module.exports = router
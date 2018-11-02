const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

// Criar
router.get('/nova', controller.novaForm)
router.post('/nova', controller.nova)
// Ler
router.get('/categoria/:categoria', controller.list)
// Apagar
router.get('/excluir/:categoria/:id', controller.excluir)
// Editar
router.get('/editar/:categoria/:id', controller.editarForm)
router.post('/editar/:categoria/:id', controller.editar)

module.exports = router
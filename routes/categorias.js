const express = require('express')
const router = express.Router()
const controller = require('../controllers/categorias')

// Criar
router.get('/nova', controller.novaForm)
router.post('/nova', controller.nova)
// Ler
router.get('/', controller.list)
// Apagar
router.get('/excluir/:id', controller.excluir)
// Editar
router.get('/editar/:id', controller.editarForm)
router.post('/editar/:id', controller.editar)

module.exports = router
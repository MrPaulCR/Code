const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function (req, res) {

    response.success(req, res, 'Lista de carreras de la Ups.', 200);
});
router.post('/', function (req, res) {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error al ingresar la carrera', 500);
    } else {
        response.success(req, res, 'Ingreso de carrera exitoso.', 200);
    }
})

module.exports = router;
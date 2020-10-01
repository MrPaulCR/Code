const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
router.get('/carreras', function (req, res) {
    res.send("Lista de carreras de la Ups.");
})
router.post('/carreras', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    res.status(201).send({ tipo_error: 0, mensaje_error: '', mensaje_exito: 'Añadido Exitosamente.' });
})

app.listen(5000);
console.log("La aplicacion se escucha en http://localhost:5000"); 
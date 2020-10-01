const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');

const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/carreras', function (req, res) {
    
    response.success(req,res,'Lista de carreras de la Ups.',200);
    

})
router.post('/carreras', function (req, res) {
    if (req.query.error == 'ok') {
    response.error(req,res,'Error al ingresar la carrera',500);
    } else {
        response.success(req,res,'Ingreso de carrera exitoso.',200);
    }
})

app.listen(5000);
console.log("La aplicacion se escucha en http://localhost:5000"); 
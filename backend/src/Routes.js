const express = require('express');

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');




const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //lista todas as ongs
routes.post('/ongs', OngController.create); //cadastra ong

routes.get('/profile', ProfileController.index); //lista caso de uma ong específica

routes.get('/incidents', IncidentController.index); // lista todos incidentes
routes.post('/incidents', IncidentController.create); // cria incidente
routes.delete('/incidents/:id', IncidentController.delete); //apaga incidente




module.exports = routes;
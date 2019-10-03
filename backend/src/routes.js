const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashBoardController.show);

//sample: url.com/spots/1/bookings
routes.post('/spots/:spot_id/bookings', BookingController.store);

// Para exportar esse arquivo JS
module.exports = routes;

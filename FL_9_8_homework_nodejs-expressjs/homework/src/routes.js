const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const car = require('./handlers/car');
const authorization = require('./middlewares/delete-authorization');

router.use(bodyParser.json());
router.post('/', function(req, res) {
    let rslt = car.createNewCar(req.body.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    res.status(rslt.status);
    res.send(rslt.body);
});

router.get('/', function(req, res) {
    let rslt = car.getCars();
    res.status(rslt.status);
    res.send(rslt.body);
});

router.get('/:id', function(req, res) {
    let rslt = car.getCarById(req.params.id);
    res.status(rslt.status);
    res.send(rslt.body);
});

router.put('/:id', function(req, res) {
    let rslt = car.updateCarById(req.body.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    res.status(rslt.status);
    res.send(rslt.body);
});

router.use('/:id', function(req, res, next) {
    let rslt = authorization.deleteAuth(req.headers.authorization);
    if (rslt) {
        next();
    } else {
        res.status(401);
        res.send('Unauthorized');
    }
});

router.delete('/:id', function(req, res) {
    let rslt = car.deleteCarById(req.params.id);
    res.status(rslt.status);
    res.send(rslt.body);
});

module.exports = router;
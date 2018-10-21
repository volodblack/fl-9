const fs = require('fs');
let carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));

module.exports.getCars = function() {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    if (carsData.length > 0) {
        
        return {
            status : 200,
            body : carsData
        };
    } else {
        
        return {
            status : 200,
            body : {message : `There is not any elements`}
        };
    }
}

module.exports.createNewCar = function(id, brand, model, engineVolume, year) {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let newCar = {
        id : id,
        brand : brand,
        model : model,
        engineVolume : engineVolume,
        year : year
    };
    let car = carsData.find(function(car) {
        
        return car.id === newCar.id;
    });
    if (car) {
        
        return {
            status : 409,
            body : {message : `Car already exists.`}
        };
    } else {
        carsData.push(newCar);
        fs.writeFileSync(__dirname + '../../../db/data.json', JSON.stringify(carsData));

        return { 
            status : 201,
            body : newCar
        };
    }
}

module.exports.getCarById = function(id) {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let car = carsData.find(function(car) {
        
        return car.id === Number(id);
    });
    if (car) {
        
        return {
            status : 200,
            body : car
        };
    } else {
        
        return {
            status : 404, 
            body : {message : `Car with such id has not been found`}
        };
    }
}

module.exports.updateCarById = function(id, brand, model, engineVolume, year) {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let car = carsData.find(function(car) {
        
        return car.id === Number(id);
    });
    if (car) {
        car.brand = brand;
        car.model = model;
        car.engineVolume = engineVolume;
        car.year = year;
        fs.writeFileSync(__dirname + '../../../db/data.json', JSON.stringify(carsData));
        
        return {
            status : 200,
            body : car
        };
    } else {
        
        return {
            status : 404,
            body : {message : `Car with such id has not been found`}
        };
    }
}

module.exports.deleteCarById = function(id) {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let car = carsData.find(function(car) {
        
        return car.id === Number(id);
    });
    if (car) {
        carsData = carsData.filter(function(cars) {
        
            return cars.id !== Number(id);
        });
        fs.writeFileSync(__dirname + '../../../db/data.json', JSON.stringify(carsData));
        
        return {
            status : 200,
            body : {message : `The car has been successfully removed`}
        };
    } else {
        
        return {
            status : 404,
            body: {message : `Car with such id has not been found`}
        };
    }
}
// task 1
function assign(target) {
    if (target === null) {
        console.error(`Can not convert entered value to object`);
    }

    let toObj = Object(target);

    for (let i = 1; i < arguments.length; i++) {
        let nextArg = arguments[i];

        if (nextArg !== null) {
            for (let key in nextArg) {
                if (Object.prototype.hasOwnProperty.call(nextArg, key)) {
                    toObj[key] = nextArg[key];
                }
            }
        }
    }

    return toObj;
}

// task 2
function movevement(direction) {
    switch (direction) {
        case 'up':
            this.y += this.getSpeed();
            break;
        case 'down':
            this.y -= this.getSpeed();
            break;
        case 'right':
            this.x += this.getSpeed();
            break;
        case 'left':
            this.x -= this.getSpeed();
            break;
        default:
            console.log(`Entered value is not valid`);
    }
}

function Bot(obj) {
    if (typeof obj !== 'object') {
        
        return {};
    }

    this.name = obj.name;
    this.speed = obj.speed;
    this.x = obj.x;
    this.y = obj.y;
    this.defaultSpeed = obj.speed;
}

Bot.prototype.setSpeed = function(newSpeed) {
    this.speed = newSpeed;

    return newSpeed;
}

Bot.prototype.getSpeed = function() {

    return this.speed;
}

Bot.prototype.getDefaultSpeed = function() {

    return this.defaultSpeed;
}

Bot.prototype.getCoordinates = function() {

    return {x: this.x, y: this.y};
}

Bot.prototype.setCoordinates = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}

Bot.prototype.move = function(direction) {
    movevement.call(this, direction);
}

Bot.prototype.showPosition = function() {
    
    return console.log(`I am a ${this.constructor.name} '${this.name}'.\
    I am located at ${this.getCoordinates().x}:${this.getCoordinates().y}`);
}

function Racebot(obj) {
    Bot.call(this, obj);
    this.previousMove = null;
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function(direction) {
    if (direction === this.previousMove) {
        this.setSpeed(this.getSpeed() + 1);
    } else {
        this.setSpeed(this.getDefaultSpeed());
    }
    movevement.call(this, direction);
    this.previousMove = direction;
}

function Speedbot(obj) {
    Bot.call(this, obj);
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function() {
    this.setSpeed(this.getSpeed() + 2);
}

Speedbot.prototype.move = function(direction) {
    movevement.call(this, direction);
    if (this.getSpeed() !== this.getDefaultSpeed()) {
        this.setSpeed(this.getSpeed() - 1);
    } else {
        this.setSpeed(this.getDefaultSpeed());
    }
}
const express = require('express');
const app = express();
const router = require('./routes');

app.use('/car', router)

app.listen(3000, function() {
    console.log('API app started');
})
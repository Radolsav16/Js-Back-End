const mongoose = require('mongoose');

require('../models/Movie');

async function configDataBase(){
    const connectionStr = 'mongodb://localhost:27017/movie-magic';

    await mongoose.connect(connectionStr);

    console.log('Database is connected');
    

}


module.exports = {
    configDataBase
}
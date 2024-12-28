const mongoose = require('mongoose');
require('../models/User');


async function configDatabase(){

const connectionStr = 'mongodb://localhost:27017/movie-magic';

await mongoose.connect(connectionStr);

console.log('Database Connected!')

}

module.exports = {
    configDatabase
}
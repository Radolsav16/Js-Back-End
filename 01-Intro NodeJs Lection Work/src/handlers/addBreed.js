const fs = require('fs');
const { responcer } = require('../responcer');
const { readFile } = require('../utils');

function addBreedHandler(req,res){
    const html = readFile('01-Intro NodeJs Lection Work/views/addBreed.html');
    responcer(res,html,'html')
}

module.exports = {
    addBreedHandler
}
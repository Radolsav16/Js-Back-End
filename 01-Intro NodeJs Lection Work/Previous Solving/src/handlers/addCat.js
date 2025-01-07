const fs = require('fs');
const { readFile } = require('../utils');
const { responcer } = require('../responcer');

function addCatHandler(req,res){
    const html = readFile('01-Intro NodeJs Lection Work/views/addCat.html');
    responcer(res,html,'html');
}   

module.exports = {
    addCatHandler
}
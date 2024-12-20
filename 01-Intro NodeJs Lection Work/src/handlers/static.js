const fs = require('fs');
const { readFile } = require('../utils');
const { responcer } = require('../responcer');


function staticResponceHandler (req,res){
    const filename = req.url;

    if(filename.endsWith('.css')){
        const data = readFile('01-Intro NodeJs Lection Work/content/styles/site.css');
        
        responcer(res,data,'css');

        return true;
    }else if(filename.endsWith('.ico')){
        const data = readFile('01-Intro NodeJs Lection Work/content/images/pawprint.ico');

        responcer(res,data,'svg-xml');

        return true;
    }

    return false;

}


module.exports = { staticResponceHandler }

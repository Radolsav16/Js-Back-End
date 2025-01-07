const http = require('http');
const { homeViewHandler } = require('./handlers/home');
const { staticResponceHandler } = require('./handlers/static');
const { addBreedHandler } = require('./handlers/addBreed');
const { addCatHandler } = require('./handlers/addCat');

const port = 3000;

const router = {
    'GET':{
        '/':homeViewHandler,
        '/index.html':homeViewHandler,
        '/cats/add-breed':addBreedHandler,
        '/cats/add-cat':addCatHandler,
    }
 
};

const server = http.createServer((req,res)=>{
    const methodObj = router[req.method]

    const rout = methodObj[req.url];

    if(typeof(rout) === 'function'){
        rout(req,res);
        return;
    } else if (staticResponceHandler(req,res)){
        return;
    }
    res.writeHead(404,{
        'Content-Type':'text/plain'
    })
    res.write('404 Not Found')
    res.end()


   
});

server.listen(port);
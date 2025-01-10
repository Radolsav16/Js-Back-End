import http from 'http'

import messageBroker from './messageBroker.js';

const server= http.createServer((req,res) => {

    if(req.url === '/' ){
        res.write('Home Page');
    }else if(req.url === '/create-user'){
        messageBroker('pesho')
        res.write(`Our sustems creatde user`);
    } else {
        res.write('Not found')
    }

    res.end();
});


server.listen(5000)
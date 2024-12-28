const express = require('express');
const { configDatabase } = require('../config/database');
const { configHandleBars } = require('../config/handlebars');
const { setMiddleWares } = require('../config/express');
const { router } = require('../config/router');


const port = 3000;
const app = express();


async function start(){
    configDatabase();
    configHandleBars(app);
    setMiddleWares(app);
    app.use(router);
    app.listen(port);
}


start();












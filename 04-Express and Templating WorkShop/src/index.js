const express = require('express');
const { configExpress } = require('../config/express');
const { configHandleBars } = require('../config/handlebars');
const { router } = require('../config/router');
const { configDataBase } = require('../config/database');

const port = 3000;


async function start(){
    const app = express();

    await configDataBase();

    configExpress(app);

    configHandleBars(app);


    app.use(router)

    app.listen(port);
}


start();

const express = require('express');
const { configExpress } = require('../config/express');
const { configHandleBars } = require('../config/handlebars');
const { router } = require('../config/router');

const port = 3030;

const app = express();

configExpress(app);

configHandleBars(app);


app.use(router)

app.listen(port);
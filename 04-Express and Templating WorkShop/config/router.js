const { Router } = require('express');
const { homeController } = require('../src/controllers/home');
const { aboutController } = require('../src/controllers/about');
const { searchContrller } = require('../src/controllers/search');
const { createControllerGet } = require('../src/controllers/create');
const { notFound } = require('../src/controllers/notFound');
const { detailsController } = require('../src/controllers/details');

const router = Router();


router.get('/',homeController);
router.get('/about',aboutController)
router.get('/search',searchContrller);
router.get('/create',createControllerGet)
router.get('/details/:id',detailsController);


router.get('*',notFound)


module.exports = {
    router
}
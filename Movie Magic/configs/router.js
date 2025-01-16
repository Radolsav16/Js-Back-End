import express from 'express'
import Home from '../src/controllers/home.js';
import About from '../src/controllers/about.js';
import create from '../src/controllers/create.js';
import error from '../src/controllers/error.js';

const router = express.Router();

router.get('/',Home);
router.get('/about',About);
router.get('/create',create);

router.get('*',error)


export default router;
import express from 'express'
import Home from '../src/controllers/home.js';
import About from '../src/controllers/about.js';
import{ create ,createPost } from '../src/controllers/create.js';
import error from '../src/controllers/error.js';
import details from '../src/controllers/details.js';
import { search } from '../src/controllers/search.js';

const router = express.Router();

router.get('/',Home);
router.get('/about',About);
router.get('/create',create);
router.post('/create',createPost)
router.get('/movies/:id/details',details);
router.get('/search',search)

router.get('*',error)


export default router;
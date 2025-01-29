import express from 'express'
import Home from '../src/controllers/home.js';
import About from '../src/controllers/about.js';
import{ create ,createPost } from '../src/controllers/create.js';
import error from '../src/controllers/error.js';
import details from '../src/controllers/details.js';
import { search } from '../src/controllers/search.js';
import  { createCastPost,createCastGet } from '../src/controllers/createCast.js';
import { attachCastGet , attachCastPOST } from '../src/controllers/castAttach.js';


const router = express.Router();

router.get('/',Home);
router.get('/about',About);
router.get('/create',create);
router.post('/create',createPost)
router.get('/movies/:id/details',details);
router.get('/search',search)
router.get('/create-cast',createCastGet);
router.post('/create-cast',createCastPost);
router.get('/cast-attach/:id',attachCastGet);
router.post('/cast-attach/:id',attachCastPOST);

router.get('*',error)


export default router;
import express from 'express'
import Home from '../src/controllers/home.js';
import About from '../src/controllers/about.js';
import{ create ,createPost } from '../src/controllers/create.js';
import error from '../src/controllers/error.js';
import details from '../src/controllers/details.js';
import { search } from '../src/controllers/search.js';
import  { createCastPost,createCastGet } from '../src/controllers/createCast.js';
import { attachCastGet , attachCastPOST } from '../src/controllers/castAttach.js';
import { getLogin , postLogin } from '../src/controllers/login.js';
import { getRegister , postRegister } from '../src/controllers/register.js';
import { getEdit, postEdit } from '../src/controllers/edit.js';
import { deleteMovie } from '../src/controllers/delete.js';

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
router.get('/login',getLogin);
router.get('/register',getRegister);

router.post('/login',postLogin);
router.post('/register',postRegister);

router.get('/movie/:id/edit',getEdit);
router.post('/movie/:id/edit',postEdit);
router.get('/movie/:id/delete',deleteMovie)

router.get('*',error)


export default router;
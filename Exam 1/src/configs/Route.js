import { Router } from "express";
import homecontroller from "../controllers/home.js";
import authContoller from "../controllers/auth.js";
import Error from "../controllers/error.js";
import recipeContoller from "../controllers/recipes.js";
import recommendController from "../controllers/recommend.js";

const router = Router();

router.use(homecontroller);
router.use('/auth',authContoller);
router.use('/recipes',recipeContoller);
router.use(recommendController)


router.get('*',Error);
export default router;
import { middlewarechain } from "./middlewares.js";

middlewarechain.use(() => {
    console.log('First Middleware');
})



middlewarechain.execute({},{});

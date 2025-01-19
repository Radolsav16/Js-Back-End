import { databaseApi } from "../service/dataApi.js";

export function create(req,res){
    res.render('create');
}

export function createPost(req,res){
    let body = '';

    req.on('data',chunk => {
        body += chunk.toString();
    })

    req.on('end',()=>{
        const data = new URLSearchParams(body);
        const obj = Object.fromEntries(data.entries());
        console.log(obj)
        databaseApi.createMovie(obj);
    })

    res.writeHead(302,{
        'location':'/'
    })

    res.end()

}


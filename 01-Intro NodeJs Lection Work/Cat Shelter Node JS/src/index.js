import http from 'http';
import homeHtml from '../views/home/home.html.js';
import addBreedHtml from '../views/addBreed.html.js';
import addCatHtml from '../views/addCat.html.js';
import siteCss from '../content/styles/site.css.js';
import querystring from 'querystring'

export const cats = [
    {
        title:"Pretty Kitty",
        breed:"Bombay Cat",
        descritpion:"Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
        imageUrl:"https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
    },
    {
        title:"Bad Kitty",
        breed:"Bombay Cat",
        descritpion:"Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
        imageUrl:"https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg"

    },
    {
        title:"Funny Kitty",
        breed:"Bombay Cat",
        descritpion:"Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
        imageUrl:"https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg"

    }
]



const server = http.createServer((req,res) => {

  

    const router = {
        '/':() => {
            writeHead(200,{'content-type':'text/html'},res)
            res.write(homeHtml(cats))}
            ,
        '/cats/add-breed':() => {
            writeHead(200,{'content-type':'text/html'},res)
            res.write(addBreedHtml())
        },
        '/cats/add-cat':() => {
            writeHead(200,{'content-type':'text/html'},res)
            res.write(addCatHtml())}
            ,
    };

    const staticRouter = {
        '/content/styles/site.css':() => {
            writeHead(200,{'content-type':'text/css'},res)
            res.write(siteCss)
        },
        '/content/images/pawprint.ico':() =>{
            writeHead(200,{'content-type':'image/png'},res)
            res.write()
        }
    }
    

    const url = req.url;

    //Pages Configuration 

    if(url === '/' && req.method === 'GET'){
        router['/']();
    }else if(url === '/cats/add-breed' && req.method === 'GET'){
        router['/cats/add-breed']();
    }else if(url === '/cats/add-cat' && req.method === 'GET'){
        router['/cats/add-cat']();
    }
    

    //Static

    if(url === '/content/styles/site.css' && req.method === 'GET'){
        staticRouter['/content/styles/site.css']()
    }


    //POST

    if(url === '/cats/add-cat' && req.method === 'POST'){

       const data =  {
        title:"Bob",
        breed:"Pahraone Cat",
        descritpion:"Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
        imageUrl:"https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
        }

        cats.push(data);

        router['/']();
        
    }

    

    res.end();
})

server.listen(5050);

console.log('Server is runnin on port 5050');


function writeHead(status,options , res){
    res.writeHead(status,options)
}
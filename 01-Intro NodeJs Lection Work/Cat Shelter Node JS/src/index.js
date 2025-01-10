import http from 'http';
import fs from 'fs/promises'
import homeHtml from '../views/home/home.html.js';
import addBreedHtml from '../views/addBreed.html.js';
import addCatHtml from '../views/addCat.html.js';
import siteCss from '../content/styles/site.css.js';
import querystring from 'querystring'

let cats = [];

async function getCats(){
    const data = await fs.readFile('./cats.json',{encoding:'utf8'});
    cats = JSON.parse(data);

}

async function getBreeds() {
    const data = JSON.parse(await fs.readFile('./breed.json',{encoding:"utf-8"}));
    return data.breeds;
}

async function addCat() {
    const catJson = JSON.stringify(cats);
    await fs.writeFile('./cats.json',catJson,{encoding:"utf-8"})
}

getCats();

const breeds = await getBreeds();

const server = http.createServer((req,res) => {
    const url = req.url;

    let breed = breeds;
    //Pages Configuration 

    if(url === '/' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(homeHtml(cats))
        res.end()
    }else if(url === '/cats/add-breed' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(addBreedHtml(breed))
        res.end()
    }else if(url === '/cats/add-cat' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(addCatHtml())
        res.end()
    }
    

    //Static

    if(url === '/content/styles/site.css' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(siteCss)
        res.end()
    }


    //POST

    if(url === '/cats/add-cat' && req.method === 'POST'){
        let body = '';
        
        req.on('data',chunk => {
            body += chunk.toString();
        })

        req.on('end',()=>{
            const data = new URLSearchParams(body);

            const cat = Object.fromEntries(data.entries());

            cats.push(cat);
            addCat();
         
        })




        res.writeHead(302,{
            'location':'/'
        })

        res.end()

    }

    

    
})

server.listen(5050);

console.log('Server is runnin on port 5050');

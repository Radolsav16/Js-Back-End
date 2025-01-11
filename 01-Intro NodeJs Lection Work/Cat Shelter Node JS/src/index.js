import http from 'http';
import fs from 'fs/promises'
import homeHtml from '../views/home/home.html.js';
import addBreedHtml from '../views/addBreed.html.js';
import addCatHtml from '../views/addCat.html.js';
import siteCss from '../content/styles/site.css.js';
import querystring from 'querystring'
import editCatHtml from '../views/editCat.html.js';
import { URLSearchParams } from 'url';

let cats = [];
let breeds = [];

//Services

async function getCats(){
    const data = await fs.readFile('./cats.json',{encoding:'utf8'});
    cats = JSON.parse(data);

}

async function getBreeds() {
    const data = JSON.parse(await fs.readFile('./breed.json',{encoding:"utf-8"}));
    breeds = [...data]
    
}

async function addCat() {
    const catJson = JSON.stringify(cats);
    await fs.writeFile('./cats.json',catJson,{encoding:"utf-8"})
}

async function addBreed() {
    const breedJson = JSON.stringify(breeds);
    await fs.writeFile('./breed.json',breedJson,{encoding:"utf-8"})
}


getCats();
getBreeds();


const server = http.createServer((req,res) => {
    const url = req.url;

    //Pages Configuration 

    if(url === '/' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(homeHtml(cats))
        res.end()
    }else if(url === '/cats/add-breed' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(addBreedHtml())
        res.end()
    }else if(url === '/cats/add-cat' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(addCatHtml(breeds))
        res.end()
    }else if(url === '/cats/edit/1' && req.method === 'GET'){
        const cat = cats.find(cat => cat.id === '1')
        res.writeHead(200,{'content-type':'text/html'})
        res.write(editCatHtml(breeds,cat));
        res.end();
    }else if(url === '/cats/edit/2' && req.method === 'GET'){
        const cat = cats.find(cat => cat.id === '2')
        res.writeHead(200,{'content-type':'text/html'})
        res.write(editCatHtml(breeds,cat));
    }else if(url === '/cats/edit/3' && req.method === 'GET'){
        const cat = cats.find(cat => cat.id === '3')
        res.writeHead(200,{'content-type':'text/html'})
        res.write(editCatHtml(breeds,cat));
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

    if(url === '/cats/add-breed' && req.method === 'POST'){
        let body = '';

        req.on('data',chunk => {
            body += chunk.toString()
        })

    

        req.on('end',()=>{
            const result = Object.fromEntries(new URLSearchParams(body).entries());
            const breed = result.breed;
            breeds.push(breed);
            addBreed()
            
        })

        res.writeHead(302,{
            'location':'/'
        })

        res.end();
    }

    if(url === '/cats/edit/1' && req.method === 'POST'){
        let body = '';

        req.on('data',chunk => {
            body += chunk.toString()
        })

        req.on('end',()=> {
            const catIndex = cats.findIndex(cat => cat.id === '1');
            const data = new URLSearchParams(body);
            const cat  = Object.fromEntries(data.entries());
            cats.splice(catIndex,1,{
                id:'1',
                ...cat
            });
            addCat()
            
        })

        
        res.writeHead(302,{
            'location':'/'
        })

        res.end()
    }
    

    
})

server.listen(5050);

console.log('Server is runnin on port 5050');

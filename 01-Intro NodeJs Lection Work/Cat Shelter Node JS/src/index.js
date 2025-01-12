import http from 'http';
import fs from 'fs/promises'
import homeHtml from '../views/home/home.html.js';
import addBreedHtml from '../views/addBreed.html.js';
import addCatHtml from '../views/addCat.html.js';
import siteCss from '../content/styles/site.css.js';
import querystring from 'querystring'
import editCatHtml from '../views/editCat.html.js';
import { URLSearchParams } from 'url';
import catShelterHtml from '../views/catShelter.html.js';

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
  

    const {url,method} = req;

    const shelterRegex = /^\/cats\/shelter\/([^\/]+)$/;
    const editRegex = /^\/cats\/edit\/([^\/]+)$/;

    const shelterMatch = shelterRegex.test(url);
    const editMatch = editRegex.test(url);

   


    //Pages Configuration 

    if(url === '/' && method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(homeHtml(cats))
        res.end()
    }else if(url === '/cats/add-breed' && method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(addBreedHtml())
        res.end()
    }else if(url === '/cats/add-cat' && method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(addCatHtml(breeds))
        res.end()
    }else if(editMatch && method === 'GET'){
        const id = url.split('/').pop();
        const cat = cats.find(cat => cat.id ===  id)
        res.writeHead(200,{'content-type':'text/html'})
        res.write(editCatHtml(breeds,cat));
        res.end()
    }else if(shelterMatch && method === 'GET'){
        const id = url.split('/').pop();
        const cat = cats.find(cat => cat.id ===  id)
        res.writeHead(200,{'content-type':'text/html'})
        res.write(catShelterHtml(cat));
        res.end()
    }

    

    //Static

    if(url === '/content/styles/site.css' && method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(siteCss)
        res.end()
    }


    //POST

    if(url === '/cats/add-cat' && method === 'POST'){
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

    if(url === '/cats/add-breed' && method === 'POST'){
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

    if(editMatch && method === 'POST'){
        let body = '';
        
        const id = url.split('/').pop()

        req.on('data',chunk => {
            body += chunk.toString()
        })

        req.on('end',()=> {
            const catIndex = cats.findIndex(cat => cat.id === id);
            const data = new URLSearchParams(body);
            const cat  = Object.fromEntries(data.entries());
            cats.splice(catIndex,1,{
                id,
                ...cat
            });
            addCat()
            
        })

        
        res.writeHead(302,{
            'location':'/'
        })

        res.end()
    }

    if(shelterMatch && method === 'POST'){
        const id = url.split('/').pop();
        const catIndex = cats.findIndex(cat => cat.id === id);

        cats.splice(catIndex,1);

        addCat();

        res.writeHead(302,{
            'location':'/'
        })

        res.end();
    }
    
    if(url === '/' && method === 'POST'){
        let body = '';
        req.on('data',chunk => {
            body += chunk.toString();
        })

        req.on('end',()=>{
              const searched = Object.fromEntries(new URLSearchParams(body).entries());
              const text = searched.text;
              
            const filtered = cats.filter(cat => cat.title.includes(text));
            console.log(filtered)
            
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(homeHtml(filtered))
        res.end()
             
        })

        
    }
    
})


server.listen(5050);

console.log('Server is runnin on port 5050');

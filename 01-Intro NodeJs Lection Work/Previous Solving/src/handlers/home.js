const fs = require('fs');
const url = require('url');
const path = require('path');
const cats = require('../../data/cats.json');
const { readFile } = require('../utils');
const { responcer } = require('../responcer');


const catTemplate =  (cat) => {
    return `
    <li>
            <img src="${cat.imageUrl}" alt="Black Cat">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
         </li>
    `
};


function homeViewHandler(req,res){
   const html = readFile('01-Intro NodeJs Lection Work/views/home/index.html');

   const data = html.replace('{{Cats}}',cats.map(cat => catTemplate(cat)).join("\n"))

   responcer(res,data,'html');

   
}



module.exports = {
    homeViewHandler
}
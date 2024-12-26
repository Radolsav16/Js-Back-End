const fs = require('fs/promises');

async function getAllData(){
    const data = JSON.parse((await fs.readFile('data/database.json')).toString());
    return data;
}


async function getCurrent(id) {
    const data = JSON.parse((await fs.readFile('data/database.json')).toString());
    
    const obj = data.find(p => p.id === String(id));

    return obj;
   
}


async function createFilmData(obj) {
    const data = getAllData();
    data.push(obj);
    await fs.writeFile('/data/database.json',JSON.stringify(data));
}


module.exports = {
    getAllData,
    getCurrent,
    createFilmData
}
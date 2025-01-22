import fs from 'fs/promises'

async function getMovies(filter){
    const data = JSON.parse(await fs.readFile('./configs/database.json',{encoding:'utf-8'}));
    let result = data;

 
    if(typeof(filter) === 'undefined'){
        return result;
    }

    if(filter.title){
        result = result.filter(movie => movie.title.toLowerCase() === filter.title.toLowerCase());
    }

    
   
    if(filter.genre){
        result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    }

    
    if(filter.year){
        result = result.filter(movie => movie.year === filter.year);
    }


    return result;
}

async function getMovie(id) {
    const data = await getMovies();

    const movie = data.find(movie => movie.id === id);

    return movie;
}


async function createMovie(movie) {
    const movies = await getMovies();
    movies.push(movie);
    await fs.writeFile('./configs/database.json',JSON.stringify(movies));
}

export const databaseApi = {
    getMovies,
    getMovie,
    createMovie

}
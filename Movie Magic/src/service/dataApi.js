import fs from 'fs/promises'

async function getMovies(){
    const data = await fs.readFile('./configs/database.json',{encoding:'utf-8'});

    return JSON.parse(data);
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
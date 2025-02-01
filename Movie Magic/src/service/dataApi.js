import Movie from '../../models/Movie.js';
import Cast from '../../models/Cast.js';

async function getMovies(filter){
    const data = await Movie.find({}).lean();

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
    const movie =  await Movie.findById(id).lean();

    return movie;
}

async function getMoviewithCast(id) {
    const movie =  await Movie.findById(id).populate('casts').lean();

    return movie;
}

async function atttachCast(movieId,castId) {
    const movie = await Movie.findById(movieId);
    movie.casts.push(castId);
    await movie.save();
}

async function getCasts() {
    const data = await Cast.find({}).lean();
    return data;
}

async function editMovie(id,data) {
    try{
    await Movie.findByIdAndUpdate(id,data);
    }catch(err){
        console.log(err.message)
    }
}

async function deletemovie(id) {
    try{
        await Movie.findByIdAndDelete(id);
    }catch(err){
        console.log(err.message);
    }
}

export const databaseApi = {
    getMovies,
    getMovie,
    getCasts,
    atttachCast,
    getMoviewithCast,
    editMovie,
    deletemovie
}
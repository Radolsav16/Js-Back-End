import express from 'express'

function expressConfig(app){
    app.use(express.static('src/public'))
    app.use(express.urlencoded({extended:false}));
}

export default expressConfig
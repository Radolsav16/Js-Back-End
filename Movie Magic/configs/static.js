import express from 'express';


export default function staticConfig(app){
    app.use('/static',express.static('src/static'));
}
import express from 'express'
import cookieParser from 'cookie-parser';

export function expressConfig(app){
    app.use(express.static('public'));
    app.use(express.urlencoded({extended:false}))
    app.use(cookieParser())
}
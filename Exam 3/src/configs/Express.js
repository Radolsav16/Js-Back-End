import express from 'express';
import cookieParser from 'cookie-parser';
import { authMiddleware } from '../middlewares/auth.js';
export default function expressConfig(app){
    app.use(express.static('public'))
    app.use(express.urlencoded({extended:false}))
    app.use(cookieParser());
    app.use(authMiddleware);
}
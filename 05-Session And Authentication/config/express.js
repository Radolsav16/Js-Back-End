const express = require('express');

function setMiddleWares(app){
    app.use(express.urlencoded({extended:true}));

}

module.exports = {
    setMiddleWares
}
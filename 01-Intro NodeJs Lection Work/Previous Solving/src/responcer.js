function responcer (res,data,type){
    res.writeHead(200,{
        'Content-Type':`text/${type}`
    })
    res.write(data);
    res.end()
}

module.exports = {
    responcer
}
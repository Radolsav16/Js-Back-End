import fs from 'fs';

// fs.mkdir('./folder',err => {
//     if(err){
//         return;
//     }
// })


// 

// const data = `<p>Hello World</p>`

// fs.writeFile('./folder/index.html',data,err => {
//     if(err){
//         console.log(err);
//         return;
//     }
// })


fs.unlink('./folder/index.html',err => {
    if(err){
        console.log(err)
        return;
    }
})


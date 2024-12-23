const fs = require('fs');


const data2 =  fs.readdir('./02-Streams and Utilities','utf-8',(err,data)=>{
    console.log(data);
})


console.log(data2);



const data = fs.readdirSync('./01-Intro NodeJs Lection Work','utf-8');

console.log(data)


fs.mkdir('./folder',err =>{
    if(err){
    console.log(err);
    return
    }

})

fs.rm('./folder',{recursive:true,force:true},err => {
    if(err){
        console.log(err)
        return;
    }else {
        console.log('Succeful deletin folder');
    }
})

let data3 = 'Radoslav Todorov';

fs.renameSync('./folder','./newFolder',err => {
    if(err){
        console.log(err);
        return;
    }else {
        console.log('Succesfully rename it!')
    }
})

const filePath = './newFolder/text.txt'

fs.writeFileSync(filePath,data3);

fs.writeFile(filePath,data3,err => {
    if(err){
        console.log(err);
        return;
    }
})

const data4 = 'Emanuela Todorova';

fs.writeFile('./output.txt',data4,err => {
    if(err){
        console.log(err);
        return;
    }
});

fs.writeFile('./EmanuelaTodorova.txt',data4,err => {
    if(err){
        return;
    }
})

fs.rm('./EmanuelaTodorova.txt',{recursive:true,force:true},err => {
    if(err){
        console.log(err)
        return;
    }else {
        console.log('Succeful deletin folder');
    }
})


fs.mkdirSync('./newFolder2');
import {createReadStream ,createWriteStream} from 'fs';

const readStream = createReadStream('./indec.html',{ encoding:"utf-8" ,highWaterMark:20 });
const writeStream = createWriteStream('./output.txt',{encoding:'utf-8'});


readStream.on('data',chunk => {
    writeStream.write(chunk.toString());
})

readStream.on('end',()=> {
    writeStream.end();
    console.log('end')
});



writeStream.write('Lorem ipsum lakahdjsgfdjfhjdb');

writeStream.end();




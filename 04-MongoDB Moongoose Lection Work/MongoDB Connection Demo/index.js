import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);


try{
await client.connect('movie-magic');

const db = client.db('movie-magic');

const collection = db.collection('users');


await collection.insertOne({name:"Pesho",age:22});

}catch(err){
    console.log(err.message)
}

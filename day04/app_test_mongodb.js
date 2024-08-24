// var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost', { useUnifiedTopology: true }, function (err, client) { 
//     if (err) throw err; 
//     var db = client.db('vehicle'); 
//     db.collection('car').findOne({}, function (findErr, result) { 
//         if (findErr) throw findErr; 
//         console.log(result.name, result.price); 
//         client.close(); 
//     }); 
// });

const http = require('http');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

let db = null;

const connectionDB = () => {

};

const server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('데이터베이스 연결' + databaseUrl);
    sb = database.db('vehicle');
});

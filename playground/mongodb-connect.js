
//const {MongoClient} = require('mongodb'); //ES6 destructure to const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb;')

  // db.collection('Todos').insertOne({
  //   text: 'Something',
  //   completed: 'false'
  // }, (err, result) => {
  //     if(err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Lior',
  //   age: '32'
  // }, (err, result) => {
  //     if(err) {
  //       return console.log('Unable to insert user', err);
  //     }
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  //find returns pointers, toArray return a promise for the array of reults
  db.collection('Todos').find({completed: "true"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {

  });
  db.close();
});

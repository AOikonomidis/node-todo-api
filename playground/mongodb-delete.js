// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // deleteMany users with name: 'Andrew'
    // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    //     console.log(result);
    // });

    // delete user with ObjectId("5a0dc74740b9872470963c47")
    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5a0dc74740b9872470963c47")}).then((result) => {
    //     console.log(result);
    // });
    // db.close();
});

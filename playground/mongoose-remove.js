const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//      console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5a5268ae9b9989cd900a2b83'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5a5268ae9b9989cd900a2b83').then((todo) => {
    console.log(todo);
});

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5a287d9fc8a19229a88895a4';
let uid = '5a16f4dcbab9240c3c59e6f9';

// if (!ObjectID.isValid(id)) console.log('ID not found');

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) return console.log('Id not found');
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(uid).then((user) => {
    if (!user) return console.log('User not found');
    console.log('User By Id', user);
}, (e) => {
    console.log(e);
})

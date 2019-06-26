const mongoose = require('mongoose');
const conf = require('./conf-db');

const { db: {host, port, user, pass, database}} = conf;
const mongoSrtConn = `mongodb://${user}:${pass}@${host}:${port}/${database}`;

mongoose.connect(mongoSrtConn);

//data manipulation
const TaskSchema = new mongoose.Schema({
    title: String,
    dueDate: Date,
    done: Boolean,
    tags: Array
});

const Task = mongoose.model('tasks', TaskSchema);

module.exports = {
    addTask: task => new Task(task).save(),
    deleteByName: taskName => Task.remove({title: taskName})
}
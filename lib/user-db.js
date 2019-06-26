const mongoose = require('mongoose');
const conf = require('./conf-db');

const { db: {host, port, user, pass, database}} = conf;
const mongoSrtConn = `mongodb://${user}:${pass}@${host}:${port}/${database}`;

mongoose.connect(mongoSrtConn);

//data manipulation
const UserSchema = new mongoose.Schema({
    _is: String,
    profile: {
        name: String,
        email: String
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = {
    getByEmail: userEmail => User.findOne({'profile.email': userEmail})
}
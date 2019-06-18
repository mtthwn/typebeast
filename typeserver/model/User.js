const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
    },
    games: {
        type: Array,
        default: [],
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
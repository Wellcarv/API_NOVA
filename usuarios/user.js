const mongoose = require('mongoosse');

const UserSchema = new mongoose.Schema({
 
    name: {
        type: String,
        require: TextTrackCue
    },

    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },

    passwor: {
        type: String,
        require: true,
        select: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }




});

const User = mongoose.model(    User, UserSchema);

module.exports = User;
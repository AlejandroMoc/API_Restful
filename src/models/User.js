const mongoose = require('mongoose');
// Modelo para Users
// Nombre, email

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    challenges: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge'
    }]
});

module.exports = mongoose.model('User', UserSchema);
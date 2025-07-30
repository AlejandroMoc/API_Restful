const mongoose = require('mongoose');

// Modelo para Challenges
// Nombre, fecha de inicio, fecha de fin, meta a cumplir

const ChallengeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    goal: {
        type: Number,
        required: true,
    },
    goalType: {
        type: String,
        enum: ['accumulative', 'daily'],
        required: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
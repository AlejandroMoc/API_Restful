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
    // TODO meta a cumplir
    // type: {},
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
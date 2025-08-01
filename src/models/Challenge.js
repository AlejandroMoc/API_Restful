const mongoose = require('mongoose');

// Modelo para Challenges
// Nombre, fecha de inicio, fecha de fin, meta a cumplir

const ChallengeSchema = new mongoose.Schema({

    // Nombre, descripción y tipo
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['steps', 'sleep', 'cardio_points'],
        required: true,
    },

    // Cantidad de días
    numberDays: {
        type: Number,
        required: true,
    },

    // Tipo de reto
    goalType: {
        type: String,
        enum: ['accumulative', 'daily'],
        required: true,
    },
    // Cantidad almacenada para el reto
    goalNumber: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
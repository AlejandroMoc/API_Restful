const mongoose = require('mongoose');

// Modelo para Challenges
// Nombre, fecha de inicio, fecha de fin, meta a cumplir

const ChallengeSchema = new mongoose.Schema({

    // Nombre y descripción
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    // Fechas de inicio y fin esperadas
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },

    // Retos
    // goalNumber representa la cantidad almacenada para el reto
    // goalType es el tipo de reto
    goalNumber: {
        type: Number,
        required: true,
    },
    goalType: {
        type: String,
        enum: ['accumulative', 'daily'],
        required: true,
    },

    // Usuarios
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
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

    // Cantidad de días
    numberDays: {
        type: Number,
        required: true,
    },

    // Retos
    // goalType es el tipo de reto
    // goalNumber representa la cantidad almacenada para el reto
    goalType: {
        type: String,
        enum: ['accumulative', 'daily'],
        required: true,
    },
    goalNumber: {
        type: Number,
        required: true,
    },
    
    // Usuarios
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
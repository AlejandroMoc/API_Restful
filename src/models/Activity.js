const mongoose = require('mongoose');
const User = require('./User');
const Challenge = require('./Challenge');

// Modelo para Actividad
// Es decir, relación entre usuario y reto

const ActivitySchema = new mongoose.Schema({

    // Usuario y reto
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true,
    },

    // Fechas de inicio y fin
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    }
    
});

module.exports = mongoose.model('Activity', ActivitySchema);
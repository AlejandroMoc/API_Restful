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

    // Fecha de actividad (el día actual)
    date: {
        type: Date,
        required: true,
    },

    //Tipo y valor de actividad
    //El tipo puede ser steps, sleep o cardio_points
    type: {
        type: String,
        enum: ['steps', 'sleep', 'cardio_points'],
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Activity', ActivitySchema);
const mongoose = require('mongoose');
const User = require('./User');

// Modelo para Actividad (actualización)
// Esta corresponde a un registro que se realiza diariamente
// para un usuario y un tipo de valor

// El tipo puede ser "steps", "sleep" o "cardio_points"

const ActivitySchema = new mongoose.Schema({

    // Usuario
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    // Fecha de actividad
    // (el día en que se registra la actualización)
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

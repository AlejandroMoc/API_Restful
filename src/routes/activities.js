// routes/activityRoutes.js
const express = require('express');
const Activity = require('../models/Activity');
const User = require('../models/User');
const Challenge = require('../models/Challenge');

const router = express.Router();

// Registrar actividad diaria
router.post('/register', async (req, res) => {
    const { userId, challengeId, date, type, value} = req.body;

    try {
        // Verificar existencia de usuario y reto
        const user = await User.findById(userId);
        const challenge = await Challenge.findById(challengeId);

        if (!user || !challenge) {
            return res.status(404).json({ error: 'Usuario o reto no encontrado' });
        }

        // Verificar si el tipo de actividad coincide con el tipo del reto
        if (challenge.type !== type) {
            return res.status(400).json({ error: 'El tipo de actividad no coincide con el tipo del reto' });
        }

        // Verificar si ya existe una entrada para el mismo día y tipo
        const existingActivity = await Activity.findOne({ user: userId, challenge: challengeId, date });
        if (existingActivity) {
            return res.status(400).json({ error: 'Ya se registró una actividad para este reto este día' });
        }

        // Finalmente, crear nueva actividad
        const newActivity = new Activity({
            user: userId,
            challenge: challengeId,
            date,

            type,
            value,
        });

        await newActivity.save();
        res.status(201).json({ message: 'Actividad registrada', activity: newActivity });
    } catch (error) {
        console.error('Error al registrar actividad:', error);
        res.status(500).json({ error: 'Error al registrar actividad' });
    }
});

module.exports = router;
// routes/activityRoutes.js
const express = require('express');
const Activity = require('../models/Activity');
const User = require('../models/User');

const router = express.Router();

// Registrar actividad diaria
router.post('/register', async (req, res) => {
    const { userId, date, type, value} = req.body;

    try {
        // Verificar existencia de usuario
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Finalmente, crear nueva actividad
        const newActivity = new Activity({
            user: userId,
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
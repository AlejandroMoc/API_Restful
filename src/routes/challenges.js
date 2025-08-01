const { Router } = require('express');
const router = Router();
const Challenge = require('../models/Challenge');

// Routes - Challenges

// Registrar un reto
router.post('/create', async (req, res) => {
    const { name, description, type, numberDays, goalNumber, goalType} = req.body;

    try {
        const newChallenge = new Challenge({
            name,
            description,

            type,
            numberDays,

            goalType,
            goalNumber,
        });
        await newChallenge.save();
        res.status(201).send({message: 'Reto creado', challenge: newChallenge});

    } catch (error) {
        console.error('Error al crear un reto:', error);
        res.status(400).json({ error: 'Error al crear un reto: ' + error.message });
    }
});

module.exports = router;
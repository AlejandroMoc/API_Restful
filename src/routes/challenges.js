const { Router } = require('express');
const router = Router();
const Challenge = require('../models/Challenge');

// Routes - Challenges

// Registrar un reto
router.post('/create', async (req, res) => {
    const { name, description, startDate, endDate , goalNumber, goalType} = req.body;

    try {
        const newChallenge = new Challenge({
            name,
            description,
            startDate,
            endDate,
            goalNumber,
            goalType,
            users: []
        });
        await newChallenge.save();
        //res.status(201).json(newChallenge);
        res.status(201).send('Reto creado');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
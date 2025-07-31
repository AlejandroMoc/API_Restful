const { Router } = require('express');
const router = Router();
const Challenge = require('../models/Challenge');

// Routes - Challenges

// Registrar un reto
router.post('/create', async (req, res) => {
    const { name, description, numberDays, goalNumber, goalType} = req.body;

    try {
        const newChallenge = new Challenge({
            name,
            description,
            
            numberDays,
            
            goalType,
            goalNumber,

            users: []
        });
        await newChallenge.save();
        //res.status(201).json(newChallenge);
        res.status(201).send('Reto creado');

    } catch (error) {
        console.error('Error al crear un reto:', error);
        res.status(400).json({ error: 'Error al crear un reto: ' + error.message });
    }
});

// Registrar un usuario en un reto TODO
router.post('/register', async (req, res) => {
    try {
        res.send('Registrar usuario usuario');
        //res.status(200).send('Usuario registrado en el reto');

    } catch (error) {
        console.error('Error al registrar usuario en reto:', error);
        res.status(400).json({ error: 'Error al registrar usuario en reto: ' + error.message });
    }
});

module.exports = router;
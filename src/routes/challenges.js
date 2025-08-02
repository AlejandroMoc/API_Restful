const { Router } = require('express');
const router = Router();
const Challenge = require('../models/Challenge');
const Activity = require('../models/Activity');
const UserChallenge = require('../models/UserChallenge');

// Routes - Challenges

// Registrar un reto
router.post('/create', async (req, res) => {
    const { name, description, type, numberDays, goalNumber, goalType} = req.body;

    try {
         // Verificar si un reto con ese nombre ya existe
         const existingChallenge = await Challenge.findOne({ name });
         if (existingChallenge) {
             return res.status(400).json({ error: 'Ya existe un reto con este nombre' });
         }

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

// Obtener leaderboard de un reto
router.get('/:challengeId/leaderboard', async (req, res) => {
    const { challengeId } = req.params;

    try {
        // Encontrar el reto
        const challenge = await Challenge.findById(challengeId);
        if (!challenge) {
            return res.status(404).json({ error: 'Reto no encontrado' });
        }

        // Encontrar todos los UserChallenge para ese reto, ordenados por progreso
        const userChallenges = await UserChallenge.find({ challenge: challengeId }).sort({ progress: -1 });

        // Mapear los UserChallenge a un formato más sencillo
        const leaderboard = userChallenges.map(uc => ({
            user: uc.user,
            progress: uc.progress
        }));

        res.status(200).json(leaderboard);
    } catch (error) {
        console.error('Error al obtener leaderboard del reto:', error);
        res.status(500).json({ error: 'Error al obtener leaderboard del reto' });
    }
});

module.exports = router;
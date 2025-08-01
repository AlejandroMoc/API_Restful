const { Router } = require('express');
const router = Router();
const Challenge = require('../models/Challenge');
const Activity = require('../models/Activity');

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

// Eliminar un reto
router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        // Eliminar actividades con id del reto
        await Activity.deleteMany({ challenge: id });

        // Eliminar el reto
        await Challenge.findByIdAndDelete(id);

        res.status(200).send({ message: 'Reto eliminado' });
    } catch (error) {
        console.error('Error al eliminar el reto:', error);
        res.status(500).json({ error: 'Error al eliminar el reto: ' + error.message });
    }
});

module.exports = router;
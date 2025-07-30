const { Router } = require('express');
const router = Router();
const Challenge = require('../models/Challenge');

// Routes - Challenges

router.get('/create', async (req, res) => {
    try {
        res.send('Registro de desafío');
        //res.status(201).send('Reto creado');

    } catch (error) {
        console.error('Error al registrar un desafío:', error);
        process.exit(1);
    }
});

module.exports = router;
const { Router } = require('express');
const router = Router();
const User = require('../models/User');

// Routes - Users

router.get('/signup', async (req, res) => {
    try {
        res.send('Registro de usuario');
        //res.status(201).send('Usuario registrado');

    } catch (error) {
        console.error('Error al registrar un usuario:', error);
        process.exit(1);
    }
});

router.get('/delete', async (req, res) => {
    try {
        res.send('Eliminar usuario');
        //res.status(201).send('Usuario eliminado');

    } catch (error) {
        console.error('Error al eliminar un usuario:', error);
        process.exit(1);
    }
});

module.exports = router;
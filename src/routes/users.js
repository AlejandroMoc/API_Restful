const { Router } = require('express');
const router = Router();
const User = require('../models/User');

// Routes - Users

// Registrar un usuario
router.post('/signup', async (req, res) => {
    const { name, email } = req.body;

    try {
        const newUser = new User({name, email });
        await newUser.save();
        //res.status(201).json(newUser);
        res.status(201).send('Usuario registrado');
    } catch (error) {
        console.error('Error al crear un usuario:', error);
        res.status(400).json({ error: 'Error al crear un usuario: ' + error.message });
    }
});

// Eliminar un usuario por su ID
router.get('/delete/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        res.send('Eliminar usuario');
        //res.status(201).send('Usuario eliminado');

    } catch (error) {
        console.error('Error al eliminar un usuario:', error);
        res.status(400).json({ error: 'Error al eliminar un usuario: ' + error.message });
    }
});


module.exports = router;
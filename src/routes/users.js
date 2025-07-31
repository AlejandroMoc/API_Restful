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
router.delete('/delete/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        // Encontrar al usuario
        const deletedUser = await User.findByIdAndDelete(userId);

        // Verificar existencia del usuario
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Eliminar el usuario de sus retos
        await Challenge.updateMany(
            { users: userId },
            { $pull: { users: userId } }
        );

        res.status(200).json({ message: 'Usuario eliminado', user: deletedUser });
    } catch (error) {
        console.error('Error al eliminar un usuario:', error);
        res.status(400).json({ error: 'Error al eliminar un usuario: ' + error.message });
    }
});

// Registrar actividad diaria TODO
router.post('/:userId/activity', async (req, res) => {
    const { userId } = req.params;

    // type debe ser "steps", "sleep" o "cardio_points"
    const { type, value } = req.body; 

    try {
        // TODO Lógica
        // Solo poder registrar una entrada por tipo por día

        res.status(200).json({ message: 'Actividad registrada' });
    } catch (error) {
        console.error('Error al registrar act. de usuario:', error);
        res.status(400).json({ error: 'Error al registrar act. de usuario: ' + error.message });
    }
});


module.exports = router;
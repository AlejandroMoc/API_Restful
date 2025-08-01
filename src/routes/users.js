const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Activity = require('../models/Activity');

// Routes - Users

// Registrar un usuario
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si un usuario con ese correo ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
        }

        const newUser = new User({name, email, password });
        await newUser.save();
        res.status(201).json({message: 'Usuario registrado', user: newUser});
    } catch (error) {
        console.error('Error al crear un usuario:', error);
        res.status(400).json({ error: 'Error al crear un usuario: ' + error.message });
    }
});

// Eliminar un usuario por su correo y contraseña
router.delete('/delete', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Encontrar al usuario por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Eliminar actividades de usuario
        await Activity.deleteMany({ user: user._id });

        // Eliminar usuario
        await User.findByIdAndDelete(user._id);

        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error('Error al eliminar un usuario:', error);
        res.status(400).json({ error: 'Error al eliminar un usuario: ' + error.message });
    }
});

module.exports = router;
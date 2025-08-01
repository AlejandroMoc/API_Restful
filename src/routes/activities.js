const { Router } = require('express');
const router = Router();

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

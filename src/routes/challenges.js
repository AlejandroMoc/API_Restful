const { Router } = require('express');
const router = Router();
// Retos (challenges)

router.get('/create', async (req, res) => {
    res.send('Registro de desafíos');
});

module.exports = router;
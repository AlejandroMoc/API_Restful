const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('API de Retos de Salud');
});

module.exports = router;
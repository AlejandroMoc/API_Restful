const { Router } = require('express');
const router = Router();
// Usuario

router.get('/signup', async (req, res) => {
    res.send('Registro de usuarios');
});

module.exports = router;
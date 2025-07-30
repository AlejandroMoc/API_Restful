const express = require('express');
const app = express();

//Archivos y configuración
const indexjs = require('./routes/index');
const dbConnection = require('./database');
const userRoutes = require('./routes/users');
const challengeRoutes = require('./routes/challenges');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

// Connectar a MongoDB
dbConnection();

// Middleware p/JSON
app.use(express.json());

// Rutas
app.use(indexjs);
app.use('/api/users/', userRoutes);
app.use('/api/challenges/', challengeRoutes);

// Escuchar al servidor en el puerto
app.listen(app.get('port'), () => {
    console.log(`API escuchando en http://localhost:${app.get('port')}`);
});
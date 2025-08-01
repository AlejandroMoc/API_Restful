const express = require('express');
const app = express();

//Archivos
const dbConnection = require('./database');
const userRoutes = require('./routes/users');
const challengeRoutes = require('./routes/challenges');
const activityRoutes = require('./routes/activities');

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Conectar a MongoDB
dbConnection();

// Middleware p/JSON
app.use(express.json());

// Rutas
app.use('/api/users/', userRoutes);
app.use('/api/challenges/', challengeRoutes);
app.use('/api/activities/', activityRoutes);

// Escuchar al servidor en el puerto
app.listen(app.get('port'), () => {
    console.log(`API escuchando en http://localhost:${app.get('port')}`);
});
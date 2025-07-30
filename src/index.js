const express = require('express');
const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Escuchar el servidor en el puerto
app.listen(app.get('port'),()=> {
    console.log(`API escuchando en http://localhost:${app.get('port')}`);
});
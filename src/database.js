const mongoose = require('mongoose');
// Conexión de BD con MongoDB

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:00000/xxxx', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a MongoDB exitosa');
    } catch (error) {
        console.error('Error al conectar a la BD:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
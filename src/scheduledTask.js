const cron = require('node-cron');

// Tarea programada
// Actualizar el progreso diario a la media noche diario

function scheduleTask() {
  cron.schedule('0 0 * * *', async () => {
    console.log('Actualización de progreso de retos...');
    try {
      console.log('Se ha actualizado el progreso de los retos.');
    } catch (error) {
      console.error('Error al actualizar el progreso de los retos: ', error);
    }
  });
}

module.exports = { scheduleTask };
const cron = require('node-cron');
const { calculateChallengeProgress } = require('./challengeService');

const User = require('../models/User');
const Challenge = require('../models/Challenge');

// Tarea programada
// Actualizar el progreso diario a la media noche diario

function scheduleTask() {
  cron.schedule('0 0 * * *', async () => {
    console.log('Actualización de progreso de retos...');
    try {
      // Obtener los retos
      const challenges = await Challenge.find({});

      // Calcular progreso
      for (const challenge of challenges) {
        const users = await User.find({});

        for (const user of users) {
          await calculateChallengeProgress(user._id);
        }
      }
      
      // Imprimir mensaje de éxito o error
      console.log('Se ha actualizado el progreso de los retos.');
    } catch (error) {
      console.error('Error al actualizar el progreso de los retos: ', error);
    }
  });
}

module.exports = { scheduleTask };
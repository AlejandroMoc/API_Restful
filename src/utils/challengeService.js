const Activity = require('../models/Activity');
const Challenge = require('../models/Challenge');
const UserChallenge = require('../models/UserChallenge');

// Calcular progreso para todos los retos
async function calculateChallengeProgress(user) {
  try {
    // Obtener todos los retos
    const challenges = await Challenge.find({});

    for (const challenge of challenges) {
      const challengeData = await Challenge.findById(challenge._id);
      if (!challengeData) {
        console.error('No se encontró el reto:', challenge);
        // Ir al siguiente reto
        continue;
      }

      let startDate = new Date(Date.now());

      // Encontrar UserChallenge correspondiente
      // a combinación de reto y usuario
      let userChallenge = await UserChallenge.findOne({ user: user, challenge: challenge._id });
      
    }
  } catch (error) {
    console.error('Error al calcular progreso de los retos:', error);
  }
}

module.exports = {calculateChallengeProgress};

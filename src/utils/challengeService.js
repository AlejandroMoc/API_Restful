const Activity = require('../models/Activity');
const Challenge = require('../models/Challenge');
const UserChallenge = require('../models/UserChallenge');

// Calcular progreso para todos los retos
async function calculateChallengeProgress(user) {
  try {

    // Obtener todos los Challenges
    const challenges = await Challenge.find({});

    // Iterar por Challenges
    for (const challenge of challenges) {
      const challengeData = await Challenge.findById(challenge._id);
      if (!challengeData) {
        console.error('No se encontró el reto:', challenge);
        continue;
      }
      
      let startDate = new Date(Date.now());
      // Encontrar UserChallenge correspondiente p/reto y usuario
      let userChallenge = await UserChallenge.findOne({ user: user, challenge: challenge._id });

      // Si existe UserChallenge
      if (userChallenge) {

        // Si no existe fecha de creación, añadirla como Date.now
        if(!userChallenge.startDate){
            userChallenge.startDate = startDate;
            await userChallenge.save();
        }

        // Si el reto es de tipo diario,
        // verificar si el usuario cumplió la meta diaria
        if (challengeData.goalType === 'daily') {
          console.log('De tipo Daily');
        
        // Si el reto es acumulativo, calcular porcentaje
        } else if (challengeData.goalType === 'accumulative') {
          console.log('De tipo acumulativo');
        }

      } else {
        console.log('No existe UserChallenge para esa combinación.');
      }
    }
  } catch (error) {
    console.error('Error al calcular progreso de los retos:', error);
  }
}

module.exports = {calculateChallengeProgress};

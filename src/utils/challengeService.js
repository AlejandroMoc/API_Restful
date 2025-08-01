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
        // Ir al siguiente reto
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

        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + challengeData.numberDays);

        // Consultar actividades correspondientes
        // por usuario, tipo y fecha
        const activities = await Activity.find({
          user: user,
          type: challengeData.type,
          date: { $gte: startDate, $lte: endDate },
        });

        let totalValue = 0;
        for (const activity of activities) {
          totalValue += activity.value;
        }

        let progress = 0;

        // Si el reto es de tipo diario,
        // verificar si el usuario cumplió la meta diaria
        if (challengeData.goalType === 'daily') {
          let daysCompleted = 0;
          let currentDate = new Date(startDate);
          while (currentDate <= endDate) {
            const dailyActivity = activities.find(
              (activity) => activity.date.toDateString() === currentDate.toDateString()
            );
            if (dailyActivity && dailyActivity.value >= challengeData.goalNumber) {
              daysCompleted++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
          }
          progress = (daysCompleted / challengeData.numberDays) * 100;
        
        // Si el reto es acumulativo, calcular porcentaje
        } else if (challengeData.goalType === 'accumulative') {
          progress = (totalValue / challengeData.goalNumber) * 100;
        }

        // Limitar progreso entre 0 y 100
        progress = Math.max(0, Math.min(100, progress));

        // Actualizar UserChallenge
        userChallenge.progress = progress;

        // Verificar si ya se completó el reto
        if (progress >= 100 && !userChallenge.completed) {
          userChallenge.completed = true;
          userChallenge.completionDate = new Date();
          console.log('Reto ${challenge.name} completado por ${user}');
        } else if (progress < 100 && userChallenge.completed) {
          userChallenge.completed = false;
          userChallenge.completionDate = null;
        }

        await userChallenge.save();

        console.log('${user} ya está registrado en el reto ${challenge._id}');
        // Continuar al siguiente reto
        continue;
      } else {
        console.log('No existe UserChallenge para esa combinación. Creándolo.');
        userChallenge = new UserChallenge({ user: user, challenge: challenge._id, startDate: startDate });

        await userChallenge.save();
      }
    }
  } catch (error) {
    console.error('Error al calcular progreso de los retos:', error);
  }
}

module.exports = {calculateChallengeProgress};

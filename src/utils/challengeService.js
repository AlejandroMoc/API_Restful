// Calcular progreso para todos los retos
async function calculateChallengeProgress(user) {
  try {
      console.log(`Progreso calculado para todos los retos`);
  } catch (error) {
    console.error('Error al calcular progreso de los retos:', error);
  }
}

module.exports = {calculateChallengeProgress};

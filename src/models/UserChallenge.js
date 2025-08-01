const mongoose = require('mongoose');

//Relación entre User y Challenge

const UserChallengeSchema = new mongoose.Schema({
  // Usuario y reto
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    required: true,
  },

  // Progreso del reto
  progress: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },

  // Fechas
  startDate: {
    type: Date,
    required: true
  },
  completionDate: {
    type: Date,
    default: null,
  },
  
});

module.exports = mongoose.model('UserChallenge', UserChallengeSchema);

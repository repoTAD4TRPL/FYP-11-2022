const { Register } = require('../models')

const findParticipantById = async (req, res, next) => {
  try {
    const { id_participant } = req.params
      const participants = await Register.findAllParticipantById(id_participant)

    res.status(200).json({
      status: 200,
      data: participants
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findParticipantById
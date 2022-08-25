const createError = require('http-errors')
const { Merch } = require('../models')

const findMerchByIdParticipant = async (req, res, next) => {
  try {
    const { id_participant } = req.params

    const merch = await Merch.findMerchByIdParticipant(id_participant)

    if (!merch) {
      next(createError.BadRequest('Merch empty!'))
    }

    res.status(200).json({
      status: 200,
      data: merch
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findMerchByIdParticipant
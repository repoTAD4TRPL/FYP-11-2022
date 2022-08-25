const { Merch } = require('../models')

const updateMerchByIdParticipant = async (req, res, next) => {
  try {
    const { id_participant } = req.params

    const merchandise = req.body

    const merch = await Merch.findMerchByIdParticipant(id_participant)

    const payload = {
      id_participant,
      merchandise
    }
    if (!merch) {
      const saveData = new Merch(payload)
      await saveData.saveMerchByIdParticipant().then((result) => {
        res.status(200).json({
          status: 200,
          result
        })
      })
    } else {
      const updateData = new Merch(payload)

      const result = await updateData.updateGivenMerch()

      res.status(200).json({
        status: 200,
        result
      })
    }


  } catch (error) {
    next(error)
  }
}

module.exports = updateMerchByIdParticipant
const { Merch } = require('../models')

const saveParticipantRegister = async (req, res, next) => {
  try {
    const payload = new Merch(req.body)

    const result = await payload.save()

    res.status(200).json({
      status: 200,
      message: "Save register Successfully",
      data: result
    })
  } catch (error) {
    console.log(error);
    next(error)
  }
}

module.exports = saveParticipantRegister
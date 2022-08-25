const { Register } = require('../models')

const saveParticipantRegister = async (req, res, next) => {
  try {
    const register = new Register(req.body)

    console.log(register)

    await register.save()

    res.status(200).json({
      status: 200,
      message: "Save register Successfully"
    })
  } catch (error) {
    console.log(error);
    next(error)
  }
}

module.exports = saveParticipantRegister
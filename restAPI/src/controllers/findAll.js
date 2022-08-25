const {Register} = require('../models')

const findAll = async (req, res, next) => {
  try {
    const participants = await Register.findAll()

    res.status(200).json({
      status: 200,
      message: "successfully",
      participants
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findAll
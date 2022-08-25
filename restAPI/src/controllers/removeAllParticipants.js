const {Register} = require('../models')

const removeAll = async (req, res, next) => {
  try {
    const results = await Register.deleteAll()

    res.status(200).json({
      status: 200,
      message: "successfully",
      results
    })
  } catch (error) {
    next(error)
  }
}

module.exports = removeAll
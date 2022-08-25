const Joi = require('joi')

const checkInUpdateValidator = Joi.object({
  validate_on: Joi.date().required(),
  validate_by: Joi.string().default('admin')
})

module.exports = checkInUpdateValidator
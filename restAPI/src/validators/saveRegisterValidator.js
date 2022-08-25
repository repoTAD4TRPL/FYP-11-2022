const Joi = require('joi')

const timeElapsed = Date.now()
const today = new Date(timeElapsed)

const checkSaveRegister = Joi.object({
  id_participant: Joi.string().required(),
  id_seminar: Joi.string().required(),
  validate_on: Joi.date().default(''),
  validate_by: Joi.string().default(''),
  ticket_type: Joi.string().required(),
  create_at: Joi.date().default(today)
})

module.exports = checkSaveRegister

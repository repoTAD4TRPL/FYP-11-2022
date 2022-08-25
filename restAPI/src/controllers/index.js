const saveParticipantRegister = require('./saveParticipantRegister')
const findIdAndSeminarParticipant = require('./findIdAndSeminarParticipant')
const updateCheckIn = require('./updateCheckIn')
const findAll = require('./findAll')
const removeAll = require('./removeAllParticipants')
const saveMerch = require('./saveMerch')
const findParticipantById = require('./findAllParticipantById')
const updateMerchByIdParticipant = require('./updateMerchByIdParticipant')
const findMerchByIdParticipant = require('./findMerchByIdParticipant')

module.exports = {
  saveParticipantRegister,
  findIdAndSeminarParticipant,
  updateCheckIn,
  findAll,
  removeAll,
  saveMerch,
  findParticipantById,
  updateMerchByIdParticipant,
  findMerchByIdParticipant
}
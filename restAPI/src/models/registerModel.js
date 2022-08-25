const ObjectId = require('mongodb').ObjectId
const createError = require('http-errors')

const { dbConnect } = require('../helpers')
const { checkSaveRegister } = require('../validators')

class Register {
  constructor(dataPayload) {
    this._dataPayload = { ...dataPayload }
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('participant', async (db) => {
          const result = await db.find({}).toArray()

          resolve(result)
        })
      } catch (error) {
        return reject(error)
      }

    })
  }

  static deleteAll() {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('participant', async (db) => {
          const result = await db.deleteMany({})

          resolve(result)
        })
      } catch (error) {
        return reject(error)
      }

    })
  }

  save() {
    return new Promise((resolve, reject) => {
      try {
        const validation = checkSaveRegister.validate(this._dataPayload)

        if (validation.error) {
          return reject(createError.BadRequest('Payload not Valid!'))
        }

        const {
          id_participant,
          id_seminar,
          validate_on,
          validate_by,
          create_at,
          ticket_type
        } = validation.value

        dbConnect('participant', async (db) => {
          const result = await db.insertOne({
            id_participant,
            id_seminar,
            validate_on,
            validate_by,
            create_at,
            ticket_type
          })
          resolve(result)
        })
      } catch (error) {
        console.info(error)
        return reject(error)
      }
    })
  }

  static update(id) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('participant', async (db) => {
          const timeElapsed = Date.now()
          const today = new Date(timeElapsed)

          const result = await db.updateOne(
            { _id:  ObjectId(id)},
            { $set: { 
              validate_on: today,
              validate_by: 'admin'
            } }
          )
          resolve(result)
        })
      } catch (error) {
        console.info(error)
        return reject(error)
      }
    })
  }

  static checkParticipant(id_participant, id_seminar) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('participant', async (db) => {
          const result = await db.findOne({
            $and: [
              {id_participant: id_participant},
              {id_seminar: id_seminar}
            ]
          })
          resolve(result)
        })
      } catch (error) {
        console.info(error)
        return reject(error)
      }
    })
  }

  static findAllParticipantById(id_participant) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('participant', async (db) => {
          const participants = await db.find({ id_participant }).toArray()

          resolve(participants)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }
}

module.exports = Register
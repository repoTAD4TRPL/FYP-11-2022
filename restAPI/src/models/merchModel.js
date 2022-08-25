const { dbConnect } = require('../helpers')

class Merch {
  constructor(merchData) {
    this.merchData = { ...merchData}
  }

  updateGivenMerch() {
    return new Promise((resolve, reject) => {
      try {
        const { id_participant, merchandise } = this.merchData

        dbConnect('merch-participant', async (db) => {
          const merch = await db.updateOne(
            { id_participant },
            { $set : 
              { given_on: Date.now(),
                merchandise
              },
            }  
          )

          resolve(merch)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }

  static findMerchByIdParticipant(id_participant) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('merch-participant', async (db) => {
          const merch = await db.findOne({ id_participant })

          resolve(merch)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }

  static findMerchByTicketType(ticket_type) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('merch', async (db) => {
          const merch = await db.findOne(
            { ticket_type },
            { projection: { _id: 0, merchandise: 1 } },
          )

          resolve(merch)
        })
      } catch (error) {
        console.log(error)
        return reject(error)
      }
    })
  }

  save() {
    return new Promise((resolve, reject) => {
      try {
        
        const { ticket_type, merchandise } = this.merchData

        dbConnect('merch', async (db) => {
          const merch = await db.insertOne({
            ticket_type,
            merchandise
          })

          resolve(merch)
        })
      } catch (error) {
        console.log(error)
        return reject(error)
      }
    })
  }

  saveMerchByIdParticipant() {
    return new Promise((resolve, reject) => {
      try {
        
        const { id_participant, merchandise } = this.merchData

        dbConnect('merch-participant', async (db) => {
          const merch = await db.insertOne({
            id_participant,
            merchandise
          })

          resolve(merch)
        })
      } catch (error) {
        console.log(error)
        return reject(error)
      }
    })
  }
}

module.exports = Merch
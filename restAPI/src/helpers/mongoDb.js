const { MongoClient } = require('mongodb')

const dbConnect = (coll, cb) => {
  MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(async (client) => {
    console.info('Database Connect!')

    const db = client.db('check-in-event').collection(coll)

    await cb(db)
    client.close()
  }).catch((error) => {
    console.log(error);
  })
}

module.exports = dbConnect
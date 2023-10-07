const connection = require("../../config/connection")

module.exports = async (collectionName) => {
  try {
    let modelExists = await connection.db.listCollections({
        name: collectionName,
      })
      .toArray()

    if (modelExists.length) {
      await connection.db.dropCollection(collectionName)
    }
  } catch (err) {
    throw err
  }
}

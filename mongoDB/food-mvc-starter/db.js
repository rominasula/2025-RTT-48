import { MongoClient } from "mongodb"; 

const connectionString = process.env.ATLAS_URI

const client = new MongoClient(connectionString)

let connection;

try {
    connection = await client.connect()
    console.log('Connected to MongoDB')
} catch (e) {
    console.log(e)
}

const db = connection.db("food")

export default db

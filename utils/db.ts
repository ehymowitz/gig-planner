import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("gigs");
  return {db, client}
}

export default connect

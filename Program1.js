import { MongoClient } from 'mongodb';
async function main() {
  const mongouri = "mongodb://localhost:27017";
  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();

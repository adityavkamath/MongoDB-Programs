import { MongoClient } from 'mongodb';
async function main() {
  const mongouri = "mongodb://localhost:27017";
  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("users");

    const filter = { name: "Aditya" };
    const updateDoc = { $set: { city: "Shivamogga" } };
    const result = await collection.updateOne(filter, updateDoc);

    console.log(`${result.modifiedCount} document(s) updated.`);
  } finally {
    await client.close();
  }
}

main();

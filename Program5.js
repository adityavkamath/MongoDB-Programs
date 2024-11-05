const { MongoClient } = require('mongodb');
async function main() {
  const mongouri = "mongodb://localhost:27017";
  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("users");

    const filter = { name: "Aditya" };
    const result = await collection.deleteOne(filter);

    console.log(`${result.deletedCount} document(s) deleted.`);
  } finally {
    await client.close();
  }
}

main();

import { MongoClient } from 'mongodb';
async function main() {
  const mongouri = "mongodb://localhost:27017";
  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("users");

    const newUser = { name: "Aditya", age: 20, city: "Udupi" };
    const result = await collection.insertOne(newUser);

    console.log(`New user created with the following id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

main();

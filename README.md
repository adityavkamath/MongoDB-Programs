
# Simple MongoDB Programs

Five simple programs that demonstrate basic MongoDB operations: connecting to a database, inserting a document, reading documents, updating a document, and deleting a document.

## Program 1: Basic Connection to MongoDB

I wrote a program that connects to MongoDB. Here’s how it works:
1. I used MongoDB’s MongoClient to create a client instance with the connection string (mongodb://localhost:27017).
2. I defined an async function called main. Inside, I used client.connect() to connect.
3. If successful, it logs ‘Connected to MongoDB!’. If there’s an error, it logs that error.
4. Finally, I used client.close() to close the connection.

## Program 2: Insert a Document

I created a program to insert a document into a collection:
1. I connected to MongoDB again.
2. I accessed a database called testDB and created a collection named users.
3. I defined a new document called newUser with properties like name, age, and city.
4. I used collection.insertOne(newUser) to insert the document and logged the ID of the new document.

## Program 3: Read Documents

To retrieve documents, I wrote this program:
1. I connected to MongoDB and accessed the testDB database and users collection.
2. I used collection.find() to fetch all documents in the users collection.
3. I used .toArray() to convert the documents into an array and logged it to display all user info.

## Program 4: Update a Document

To update a document, I created this program:
1. I connected to MongoDB and accessed the same collection.
2. I defined a filter to find the document to update, looking for a user named ‘Aditya’.
3. I created an updateDoc object with the $set operator to modify the city field to ‘Shivamogga’.
4. I used collection.updateOne(filter, updateDoc) to apply this change and logged the number of documents updated.

## Program 5: Delete a Document

To delete a document, I created this program:
1. I connected to MongoDB and accessed the users collection again.
2. I created a filter to identify the document I want to delete, looking for a user named ‘Aditya’.
3. I used collection.deleteOne(filter) to delete the document that matches this filter and logged the number of documents deleted.

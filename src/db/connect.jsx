import { MongoClient } from 'mongodb';
var url = "mongodb://172.104.156.217:27017/?directConnection=true&appName=mongosh+1.6.0";
const client = new MongoClient(url);

async function addCollection(database, collection, arrayOfData) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(db);
    const collectionOfDB = db.collection(collection);
    const insertResult = await collectionOfDB.insertMany([arrayOfData]);
    console.log('Inserted documents =>', insertResult);

    // the following code examples can be pasted here...

    return 'done.';
}


async function getCollection(database, collection) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("volontari");
    const collectionOfDB = db.collection('interrogazioni');
    const findResult = await collectionOfDB.find({}).toArray();
    console.log('Found documents =>', findResult);

    // the following code examples can be pasted here...

    return findResult;
}

async function clear(database, collection) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("volontari");
    const collectionOfDB = db.collection('interrogazioni');
    const deleteResult = await collectionOfDB.deleteMany({});
    console.log('Deleted documents =>', deleteResult);

    // the following code examples can be pasted here...

    return 'done.';
}

getCollection()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


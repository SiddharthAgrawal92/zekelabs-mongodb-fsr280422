

//json
[
    {
        name: 'Maria',
        age: 25,
        address: '121 CA City',
        order: 200,
        amount: 10000
    },
    {
        name: 'Mark',
        age: 31,
        address: '123 CA City'
    }
]

//commands to remember
// 1. show current db you are in
//>db

// 2. show all databases
//>show dbs

// 3. switch to a new db or existing one
//>use <<your_db_name>>

// 4. Show all the collection
//>show collections

// 5. Create a collection in the db
//>db.createCollection(<<your_collection_name: string>>)

// 6. Delete a database
//>db.dropDatabase()

// 7. Drop a collection
//>db.<<your_collection_name>>.drop()

// 8. Create a single document inside a collection
//>db.<<your_collection_name>>.insertOne({your_document_object})

// 9. Create a single document inside a collection
//>db.<<your_collection_name>>.insertMany([{your_document_object}, ...])

// 10. Clearing of cli screen
//>cls or press ctrl+l keys

// 11. Read all the documents
//>db.<<your_collection_name>>.find()

// 12. Read all the documents with a criteria
//>db.<<your_collection_name>>.find({key_of_document:value_of_document(criteria for filtering)})

// 13. Read one document from collection which fetches the first matched document
//>db.<<your_collection_name>>.findOne({key_of_document:value_of_document(criteria for filtering)})

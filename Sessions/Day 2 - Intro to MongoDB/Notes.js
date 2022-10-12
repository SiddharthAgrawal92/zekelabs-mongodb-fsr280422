

//MyDB --> Database 

//Users --> Collection
[
    //Documents
    {
        _id: 101,
        name: 'Adam',
        job: 'salesperson'
    },
    {
        _id: 102,
        name: 'Maria',
        job: 'accounts',
        gender: 'f',
        list: [
            {
                id: 201,
                item_1: 100,
            }
        ]
    }
]


[
    {
        _id: '1h3j11g4184g184g18',
        name: 'Adam',
        job: 'salesperson'
    }
]


//primary(master) node
//1. write operation
//2. Read operation

//Secondary nodes --> 1, 2, 3

//In case primary fails
//Election will happen in secondary Nodes



//### Hierarchical objects ### 
//Books
//   |
//  Programming --------|
//  |                   |
//  Languages           Databases
//                      |        |
//                      MongoDb  dbm


//Tree with Parent References
[
    { _id: "Books", parent: null },
    { _id: "Programming", parent: "Books" },
    { _id: "Languages", parent: "Programming" },
    { _id: "Databases", parent: "Programming" },
    { _id: "MongoDb", parent: "Databases" },
    { _id: "dbm", parent: "Databases" }
]

//Tree with Child References
[
    { _id: "Books", children: ["Programming"] },
    { _id: "Programming", children: ["Languages", "Databases"] },
    { _id: "Languages", children: [] },
    { _id: "Databases", children: ["MongoDb", "dbm"] },
    { _id: "MongoDb", children: [] },
    { _id: "dbm", children: [] }
]

//Tree with Array of Ancestors
[
    { _id: "MongoDb", ancestors: ["Books", "Programming", "Databases"], parent: "Databases" },
    { _id: "dbm", ancestors: ["Books", "Programming", "Databases"], parent: "Databases" },
    { _id: "Databases", ancestors: ["Books", "Programming"], parent: "Programming" },
    { _id: "Books", ancestors: [], parent: null }
]

//Tree with materialized path
[
    { _id: "MongoDb", path: ",Books,Programming,Databases" }
]


// ### Embedding ###
//Car --> Collection
[
    {
        _id: 101,
        name: "Tata Nexon",
        parts: [
            {
                name: 'wheel',
                specs: {}
            },
            {
                name: 'steering',
                specs: {}
            },
            // .
            // .
            // .
            // .
            // 1000
        ]
    }
]
//Query 1
//Find car with id=101 --> Returns a Document that contains a car with all parts

//Query 2
//Overhead query with irrelevant fields - Find Wheel part specs of a Car ID=101
//--> Returning all the parts which are irrelevant 

//### Referencing ###
//Car --> Collection
[
    {
        _id: 101,
        name: 'Tata Nexon',
        parts: [201, 202]
    }
]

//CarParts--> Collection
[
    {
        _id: 201,
        name: 'wheel',
        specs: {}
    },
    {
        _id: 202,
        name: 'steering',
        specs: {}
    }
]

//Find part specs ID=201 of Car=101 --> returns a car with a specific part detail
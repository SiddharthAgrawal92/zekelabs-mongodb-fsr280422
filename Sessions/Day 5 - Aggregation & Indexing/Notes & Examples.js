
//aggregate

let myKey = 10;
myKey = "New Value";
myKey = [{}]

//page in the front end - Provide a date-picker for user to set from and to date

//1st iteration 
[{
        _id: "Pepperoni",
        totalAmount: 190,//0+(19*10),
        count: 1
    }]

//2nd iteration 
[{
        _id: "Pepperoni",
        totalAmount: 590,//190+(20*20),
        count: 2
    }]


//Stats Without indexing
[{
        executionStats:
        {
            executionSuccess: true,
            nReturned: 1,
            executionTimeMillis: 0,
            totalKeysExamined: 0,
            totalDocsExamined: 8,
            executionStages:
            {
                stage: 'COLLSCAN',
                filter:
                {
                    '$and':
                        [{ name: { '$eq': 'Pepperoni' } },
                        { size: { '$eq': 'medium' } }]
                },
                nReturned: 1,
                executionTimeMillisEstimate: 0,
                works: 10,
                advanced: 1,
                needTime: 8,
                needYield: 0,
                saveState: 0,
                restoreState: 0,
                isEOF: 1,
                direction: 'forward',
                docsExamined: 8
            }
        }
    }]

//stats with indexing on field name and size
[
    {
        executionStats:
        {
            executionSuccess: true,
            nReturned: 1,
            executionTimeMillis: 0,
            totalKeysExamined: 1,
            totalDocsExamined: 1,
            executionStages:
            {
                stage: 'FETCH',
                nReturned: 1,
                executionTimeMillisEstimate: 0,
                works: 2,
                advanced: 1,
                needTime: 0,
                needYield: 0,
                saveState: 0,
                restoreState: 0,
                isEOF: 1,
                docsExamined: 1,
                alreadyHasObj: 0,
                inputStage:
                {
                    stage: 'IXSCAN',
                    nReturned: 1,
                    executionTimeMillisEstimate: 0,
                    works: 2,
                    advanced: 1,
                    needTime: 0,
                    needYield: 0,
                    saveState: 0,
                    restoreState: 0,
                    isEOF: 1,
                    keyPattern: { name: 1, size: 1 },
                    indexName: 'name_1_size_1',
                    isMultiKey: false,
                    multiKeyPaths: { name: [], size: [] },
                    isUnique: false,
                    isSparse: false,
                    isPartial: false,
                    indexVersion: 2,
                    direction: 'forward',
                    indexBounds:
                    {
                        name: ['["Pepperoni", "Pepperoni"]'],
                        size: ['["medium", "medium"]']
                    },
                    keysExamined: 1,
                    seeks: 1,
                    dupsTested: 0,
                    dupsDropped: 0
                }
            }
        }
    }
]

//mongo db data types
[
    {
        name: "",
        age: 10,
        isActive: true,
        expenses: 20233.67,
        obj: {
            a: 1
        },
        arr: [1, 2, 3, 4, {}, ''],
        date: new Date(),//simple date
        isoDate: ISODate('2022-01-31'),//ISO date('yyyy-mm-dd')
        //result --> "2022-01-31T00:00:00:000Z"
        //01-31-2022 -  North America
        //31-01-2022 - India
        admin: null,
        regExp: /%g/ //regular expression
    }
]


//orders of pizza shop
db.orders.insertMany([
    {
        _id: 0, name: "Pepperoni", size: "small", price: 19,
        quantity: 10, date: ISODate("2022-03-13T08:14:30Z")
    },
    {
        _id: 1, name: "Pepperoni", size: "medium", price: 20,
        quantity: 20, date: ISODate("2022-03-13T09:13:24Z")
    },
    {
        _id: 2, name: "Pepperoni", size: "large", price: 21,
        quantity: 30, date: ISODate("2022-03-17T09:22:12Z")
    },
    {
        _id: 3, name: "Cheese", size: "small", price: 12,
        quantity: 15, date: ISODate("2022-03-13T11:21:39.736Z")
    },
    {
        _id: 4, name: "Cheese", size: "medium", price: 13,
        quantity: 50, date: ISODate("2022-01-12T21:23:13.331Z")
    },
    {
        _id: 5, name: "Cheese", size: "large", price: 14,
        quantity: 10, date: ISODate("2022-01-12T05:08:13Z")
    },
    {
        _id: 6, name: "Vegan", size: "small", price: 17,
        quantity: 10, date: ISODate("2022-01-13T05:08:13Z")
    },
    {
        _id: 7, name: "Vegan", size: "medium", price: 18,
        quantity: 10, date: ISODate("2022-01-13T05:10:13Z")
    }
])

//https://api.com?user_id=101&isAdmin=true

//query params = user_id=101&isAdmin=true
const body = { //request payload/
    user_id: 101,
    email: 'a@a.com'
}

//update user if not found create one
api.post('some-api-url', (req, res) => {
    const id = req.user_id;
    const body = req.body || { key: value };
    db.users.update(
        { _id: id },
        { $set: body },
        { upsert: true }
    )

    // const mongo_response  = response from mongo db query; 
    // if(mongo_response && mongo_response.acknowledged && mongo_response.deletedCount > 0){
    // send the success response to the front-end
    // }
});

// sum = X+1
// sub = X-1

//from front end you have to update a record and in response of an api you've to return the updated document


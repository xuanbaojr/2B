
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://xuanbao_01:02022003aA@cluster0.yjcpjwu.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // create Function
    await createListing(client,
        {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        }
    );

    await createMany(client, [
      {
          name: "XuanBao01"
      },
      {
          summary_test: "XuanBao02"
      }]
    );

    // Read
      // FindOne
    await findOne_test(client, "XuanBao01")
      // find
    await find_test(client, {
      bedrooms_count : 4,
      bathrooms_count : 2,
      limit_count : 5,
    });

    // Update
    await updateByName(client, "Ribeira Charming Duplex ", {
      
      bedrooms: 6,
      beds: 8
    });


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// -------------------------------------------------------------------------- //

// create
async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReview").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMany(client, newListing){
    await client.db("sample_airbnb").collection("listingTest").insertMany(newListing);
    
}

// FIND
  // findOne
async function findOne_test(client, nameKey){
    const result = await client.db("sample_airbnb").collection("listingTest").findOne({name : nameKey});
    if(result) {
      console.log(result);
    }else{
      console.log("error");
    }
}
  // find
async function find_test(client, query){
    const cursor = await client.db("sample_airbnb").collection("listingsAndReviews").find({
      bedrooms: { $gte : query.bedrooms_count},
      bathrooms: { $gte : query.bathrooms_count}
    }).sort({ last_review: -1})
    .limit(query.limit_count);

    const result = await cursor.toArray();
    if(result.length){
      console.log(`co tat ca: ${query.limit_count} phong co nhieu hon ${query.bedrooms_count} bedrooms no`);
      result.forEach((result,i) => {
        console.log(`${i} co id: ${result._id}` );
      });
    }else{
      console.log(`Khong tim thay`);
    }

}

  // Update
async function updateByName(client, name, update){
  const result = await client.db("sample_airbnb").collection("listingTest01").updateOne(
    {name: name},
    {$set: update},
    
  );

  console.log(`${result.matchedCount}`);
  console.log(`${result.modifiedCount}`);
}

run().catch(console.dir);

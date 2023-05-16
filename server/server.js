// import express and cors
const express = require("express");
const cors = require("cors");
const app = express();
// create an express application
app.use(cors());
app.use(express.json());

// create a Get route
app.get('/message', (req,res) => {
    res.json({ message: "Hello Bao"});
});

// start the server
app.listen(8000, () => {
    console.log(`Server is running on port : 8000`);
});



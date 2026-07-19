const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());



// Test API
app.get("/", (req, res)=>{

    res.send(
        "UK House Hunter AI Backend Running 🚀"
    );

});



// Analyse API
app.post("/analyse", (req,res)=>{


    const url = req.body.url;


    res.json({

        message:
        "Property analysis started",

        url:url,

        status:
        "waiting"

    });


});





app.listen(3000,()=>{


    console.log(
        "Backend running on port 3000"
    );


});
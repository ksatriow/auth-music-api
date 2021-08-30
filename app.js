require("dotenv").config();
const express = require("express");
const db = require("./api/config/db");

const apiRouter = require("./api/index.route");

//Initialize the app
const app = express();
//Setting database connection object on app

app.set("db",db);

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Music Api");
});

app.use("/api",apiRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
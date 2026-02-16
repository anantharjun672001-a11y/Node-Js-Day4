import http from "http";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";


//dotenv config

dotenv.config();

//express initialization

const app = express();  

//default middleware

app.use(express.json());
app.use(cors());

//default route

app.get("/", (req, res) => {
    res.status(200).send(`<h1 style="text-align:center;">Welcome All</h1>`);
});


//port

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});






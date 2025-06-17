import express from "express";
import data from "./Fruits.js";



const app = express();

app.get("/", (req, res) => {
    res.json(data );
})

app.get("/getName", (req, res) => {
    const name = data.map((fruit) => fruit.name);
    res.json(name);
})

const port = 8000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} okk`);
});


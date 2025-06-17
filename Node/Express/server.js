import express from "express";
import data from "./Fruits.js";



const app = express();

app.get("/", (req, res) => {
    res.json(data );
})

app.get("/getName/:id", (req, res) => {
    const { id } = req.params;
    const name = data.find((item) => item.id == id);
    res.json(name);
})

const port = 8000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} okk`);
});


import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


const port = 8000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} okk`);
});


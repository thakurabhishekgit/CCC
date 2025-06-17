import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const myPath = path.join(__dirname, "public");
app.use(express.json());
app.use(express.static(myPath));
app.use(express.urlencoded({ extended: true }));

let student = [
    {   
        id: 1,
        name: "Anurag",
        parents: {
            father: "Ravi",
            mother: "Rani"
        }, 
        gender: "male"
    }
];

app.post("/addData", (req, res) => {
    const newId = student.length > 0 ? student[student.length - 1].id + 1 : 1;
    const newStudent = { id: newId, ...req.body };
    student.push(newStudent);
    res.json({
        status: "success",
        data: newStudent
    });

    fs.writeFileSync("student.json", JSON.stringify(student));
    
});

app.get("/addData", (req, res) => {
    res.json({
        status: "success",
        data: student
    });
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
import express from 'express'
import path from 'path'
const app = express()
const port = 8000

const myPath = path.join(import.meta.dirname , "public" )
app.use(express.json());
app.use(express.static(myPath))
app.use(express.urlencoded({extended : true}))
let student = [
    {
        name : "Anurag"
    }

]

app.post("/addData" , (req , res) => {
    student.push(req.body)
    res.json({
        status : "success",
        data : req.body
    })
})


app.get("/addData" , (req , res) => {
    res.json(JSON.stringify(student))
})


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
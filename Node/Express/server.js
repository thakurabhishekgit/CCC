import express from 'express'
import path from 'path'
const app = express()
const port = 8000

const myPath = path.join(import.meta.dirname , "public" )

app.use(express.static(myPath))

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
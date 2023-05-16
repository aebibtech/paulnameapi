import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello from Paul's Name API.")
})

app.post('/name', (req, res) => {
    if(req.body.name === undefined && req.query.name === undefined){
        res.status(400)
        res.json({ error: `Provide a name like this: { name: "<Your name here>" }.` })
        return
    }
    if(req.body.name){
        console.log("Name provided:", req.body?.name)
        res.json({ name: req.body?.name })
        return
    }
    if(req.query.name){
        console.log("Name provided:", req.query?.name)
        res.json({ name: req.query?.name })
        return
    }
})

app.listen(PORT, () => {
    console.log(`Paul's Name API listening from port ${PORT}`)
})
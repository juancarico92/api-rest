'use strict'

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/hello/:name', (req, res) => {
//     res.send({ message: `Hello ${req.params.name}! Super!`})
// })

app.get('/api/product', (req, res) => {
    res.send(200, {products: []})
})

app.get('/api/product/:productId', (req, res) => {
    
})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    // res.send(200, {message: `El producto se ha recibido`})
    res.status(404).send({message: `El producto no existe`})    
})

app.put('/api/product/:productId', (req, res) => {
    
})

app.delete('/api/product/:productId', (req, res) => {
    
})


app.listen(port, () => {
    console.log (`API REST corriendo en http://localhost:${port}`)
})
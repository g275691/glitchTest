const express = require('express')
const app = express()
const PORT = 3000;

app
.get('/', function (req, res) {
  res.send('Hello World')
})
.post('/', (req, res) => {
    res.send({
        "name": "Ivan"
    })
})

app.listen(PORT, ()=>console.log(`listen ${PORT}`))
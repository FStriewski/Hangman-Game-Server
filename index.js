const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const imageRouter = require('./image/router')
const wordRouter = require('./word/router')

app.use(bodyParser.json())

app.use(imageRouter)
app.use(wordRouter)

app.listen(4001, () => console.log('Express API listening on port 4001'))

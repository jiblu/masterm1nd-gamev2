const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
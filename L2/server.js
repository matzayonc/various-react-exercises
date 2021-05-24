const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
    let dbPath = require('./data/zones.json');
  res.send(JSON.stringify(dbPath));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

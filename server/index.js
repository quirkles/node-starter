const express = require('express')
const path = require('path')

const app = express()

const src_dir = path.join(__dirname, '../src');

const public_dir = path.join(src_dir, 'public');


app.get('/', function (req, res) {
  res.sendFile(path.join(src_dir, 'index.html'))
})

app.use(express.static(public_dir))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

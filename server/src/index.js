const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join('/app/client/build')))

app.get('/*', function(req, res) {
  res.sendFile(path.join('/app/client/build', 'index.html'))
})

app.listen(80)

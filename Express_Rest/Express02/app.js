const app = require('./src/server.js')

const port = 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


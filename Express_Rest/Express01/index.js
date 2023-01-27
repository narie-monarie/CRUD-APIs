const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
  if (req.method === 'GET', res === '/') {
    console.log('Hello World')
    res.end()
  }

})

server.listen(port, () => {
  console.log(`server listening on port 3000`)
})

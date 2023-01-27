const http = require('http')

const server = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/') {
    console.log('Hello World')
    res.end()
  }

  if (req.method === 'GET' && req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hello World</h1>')
    console.log(req.url)
    res.end()
  }

  //returning json
  if (req.method === 'GET' && req.url === '/course') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const data = {
      "name": "Learning Node.js",
      "desc": "Building APIs with Node"
    }

    console.log(req.url)
    res.end(JSON.stringify(data))

  }


})

server.listen(3000, () => {
  console.log(`server listening on port 3000`)
})

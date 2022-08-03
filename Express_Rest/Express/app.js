// const http = require("http");
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application-json" });
//   if (req.url === "/") {
//     fs.readFile("./page/index.html", "utf8", (err, data) => {
//       if (err) throw err;
//       res.write(data)
//       res.end()
//     })
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.write('<h1>Page Not Found<h1>')
//   }
// });
// server.listen(3000);
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app running on port ${port}`)
})

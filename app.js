const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
      res.end('home page')
  }
  if (req.url === '/about') {
    //   BLOCKING CODE
      for (let i = 0; i < 1000; i++) {
          for (let j = 0; j < 100; j++) {
              console.log(i,j);
          }
      }
      res.end('about page')
  }
  res.end('404 page not found')
})

server.listen(5001, () => {
  console.log('Server listening on port : 5001....')
})
const http = require('http');
// req - incoming requests
// res - what we are sending as a response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');    
    }
    if (req.url === '/about') {
        res.end('Here is our history');    
    }
    res.end(`
    <h1>Page not found</h1>
    <a href="/">home</a>
    `)
})

// port
server.listen(5000)

// web server keep on listening requests
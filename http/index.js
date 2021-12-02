const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.write('<h1>Welcome to our home page</h1>')
    }
    else if (req.url === '/about') {
        res.write('Welcome to our about page')
    }
   res.end()
})

server.listen(5000)
const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    if(req.url === '/home' ){
        fs.readFile('frontend/index.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } if(req.url === '/about'){
        fs.readFile('frontend/about.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } 
    if(req.url === '/questions'){
        fs.readFile('frontend/questions.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error:file not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    } 


})

server.listen(port,function (error){
    if (error){
        console.log("Something went wrong", error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})



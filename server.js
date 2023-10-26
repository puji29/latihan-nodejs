const http = require ('http')
const fs = require('fs')
const host = "localhost"
const port = 3000

const app = http.createServer((req, res)=>{
    const url = req.url
    switch (url){
        case '/':
            res.end("Hello world")
            break
        case '/get-data':
            const data = [{name : 'puji', nim : 1966789}]
            res.statusCode = 200
            res.end(JSON.stringify(data))
            break
        case '/test':
            fs.readFile('index.html', (err, html) => {
				if (err) throw err;
				res.writeHeader(200, {"Content-Type": "text/html"})
				res.write(html)
				res.end()
			})
			break
        case '/now':
            res.statusCode = 404
            res.end(new Date().toString())
            break
        default:
            res.statusCode = 404
            res.setHeader('content-Type', 'text/plain')
            res.end('page not found')
    }
})


app.listen(port, ()=>{
    console.log(`listen on port ${port}`)
})
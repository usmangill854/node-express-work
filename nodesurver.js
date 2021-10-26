const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar/index.html')
const browserApp = readFileSync('./navbar/browser-app.js')
const logo = readFileSync('./navbar/logo.svg')
const style = readFileSync('./navbar/style.css')



const server = http.createServer((req,res) => {
    const url = req.url
    if(url ==='/'){ 
    res.writeHead(200,{'contentType':'text/html'})
    console.log('dsd')
    res.end(homePage)
    }
    else if(url === '/about'){
        res.writeHead(200,{'contentType':'text/html'})
        res.write('about page')
        res.end()
        console.log('about page')
    }
    
    else if(url === '/style.css'){
        res.writeHead(200,{'contentType':'text/css'})
        res.write(style)
        res.end()
        console.log('style page')
    }
    else if(url === '/logo.svg'){
        res.writeHead(200,{'contentType':'image/svg+xml'})
        res.write(logo)
        res.end()
        console.log('style page')
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'contentType':'text/javascript'})
        res.write(browserApp)
        res.end()
        console.log('style page')
    }
  
    else{
        res.writeHead(400,{'contentType':'text/html'})
        res.write('page not exist')
        res.end()
        console.log(url)
    }
})
server.listen(5000)
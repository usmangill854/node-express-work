const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware  
app.use(express.static('./public'))


// app.get('/',(req,res) => {
//      res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
//  })
app.all('*',(req,res) => {
    res.status(404).send('resource not found')
})

app.listen(5000,() =>{
    console.log('server is running on part 5000')
})
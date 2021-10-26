 //axios for frontend 
 
 const express = require('express')
 
 const app = express()
  const people =  require('./routes/people')
  const auth = require('./routes/auth')
   
app.use(express.json())
// static assert
// app.use(express.static('./methods-public'))

app.use('/api/people',people)
app.use('/login',auth)


    
 app.listen(5000,() =>{
     console.log('server is running on part 5000')
 })

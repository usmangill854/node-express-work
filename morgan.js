const path = require('path')
 const logger = require('./logger')
 const authorize = require('./authorize')
 const morgan = require('morgan')

 
//req => middleware
app.use(morgan('tiny'))
// app.use([authorize,logger] )
// app.use(express.static('./public'))

 app.get('/',(req,res) => {
    res.send('Home')
 })
 app.get('/about',(req,res) => {
     res.send('About')
 })
 app.get('/api/products',(req,res) => {
     res.send('Prosucts')
 })
 app.get('/api/items', (req,res) => {
    res.send('items')
})
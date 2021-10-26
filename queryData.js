
 const {products} = require('./data')
 app.get('/',(req,res) => {
     res.send('<h1> home page </h1> <a href="/api/products">products</a> ')
 })

 app.get('/api/products',(req,res) => {
     const newProduct = products.map((product)=>{
         const {id,name,image}=product
       return  {id,name,image}
     })
     res.json(newProduct)  
 })
 app.get('/api/products/:id',(req,res) => {
     const singleProduct = products.find((product)=>product.id === Number(req.params.id) )
      
      if(!singleProduct){
          return res.status(404).send('product does not exist')
      }
      res.json(singleProduct)
     console.log(singleProduct)
 }) 


 

 app.get('/api/v1/query',(req,res) => {
    console.log(req.query)  
    const{search,limit}=req.query
    let sortedProsucts = [...products]

    if(search){
        sortedProsucts= sortedProsucts.filter(product =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProsucts = sortedProsucts.slice(0,Number(limit))
    }
    if(sortedProsucts.length<1){
       return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProsucts)

    // res.send('he;p wprld') 
 })


//  app.get('/api/vi/query',(req,res) => {
//      console.log(req.query)
//      let sor
//      res.send('hello')
//  })
  
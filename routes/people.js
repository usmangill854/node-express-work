 const express = require('express')
const router = express.Router()

const{postData, getData,deleteData,updateData}= require('../controlers/people')
 

// router.get('/',getData)



// router.post('/',postData)
 
// router.put('/:id',updateData)

// router.delete('/:id',deleteData)
 
router.route('/').get(getData).post(postData)
router.route('/:id').put(updateData).delete(deleteData)


module.exports = router


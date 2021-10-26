let {people} = require('../data')


const getData = (req,res) => {
    res.status(200).json({success:true,data:people})
}

const postData = (req,res) =>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide your name value'})
    }
    res.status(201).json({success:true,name:name} )
}

const updateData = (req,res) => {
    const{id}=req.params
    const {name} = req.body
    const person = people.find(person=>person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:'noone person found'})
    }
    const newPerople = people.map(person => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data:newPerople})
}

const deleteData = (req,res) => {
    const {id}=req.params
    console.log(id)
    const idCheck = people.find(person => person.id === Number(id))
    if(!idCheck){
        res.status(404).json({success:false,mag:'id not found'})
    }
    const newPeople = people.filter(
        person => person.id !== Number(id) 
    )
    return res.status(200).json({success:true,msg:newPeople})
    
}
module.exports = {
    updateData,
    deleteData,
    getData,
    postData
}
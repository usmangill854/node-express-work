const {readFile} =require('fs').promises
// const util  =require('util')
// const readFilePromise = util.promisify(readFile)

// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else
//             resolve(data)
//         })
//     })
// }

const start = async () =>{
    try {
        
    const first = await readFile('./writeFile.txt','utf8')
    console.log(first)
    } catch (error) {
        console.log(error)
    }
}
start()
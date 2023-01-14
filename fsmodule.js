const fs = require('fs');

//fs.readFile('file.txt','utf8',(err,data) =>{
//    console.log(err,data)
//})

//const a = fs.readFileSync('file.txt')
//console.log(a.toString())


//fs.writeFile('file.txt',"This is Data",()=>{
//    console.log("Data Entered !")
//})

b=fs.writeFileSync('file.txt',"New Data Entered ! ")
console.log(b)


console.log("Finished Reading File ")
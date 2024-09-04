console.log('hello')
const { log } = require('console');
// console.log(window) ;
// console.log(process) ;

//NOTE importing in the nodejs using "common js modules"  ...

// fs module
const fs = require('fs') ;

//NOTE readFileSync
//NOTE BLOCKING CODE IN THE NODEJS
console.log('reading file started')

//to convert buffer into character we use utf-8
const data = fs.readFileSync('./NODE.JS/index.txt','utf-8')

console.log(data)
console.log('reading file ended')

//NOTE readFile

console.log('async file start')

//NON BLOCKING
fs.readFile('./NODE.JS/index.txt', 'utf-8', (err,data)=>{
console.log(data)
})


console.log('async file ended');

fs.writeFile('text.txt','async')

//sync files dont goes under callstack
//NOTE writeFile and writeFileSync

fs.writeFileSync('./example.txt','hello')

fs.writeFile('text.txt','async data', ()=>{
    console.log('file created')
})


//NOTE appendFile ,appendFileSync

fs.appendFile('./NODE.JS/index.txt','adding using append',()=>{
    console.log('new data added');
    
})

fs.renameSync('./NODE.JS/index.txt','demo.txt')





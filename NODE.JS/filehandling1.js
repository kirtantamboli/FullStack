//NOTE operating system module 
//gives the details about the system where node js is installed
const os = require('os') ;

console.log(os.hostname());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());

//NOTE path modules
//NOTE path.dirname
//in this we use backward slash in path
const path = require('path') ;
console.log(path.dirname('C:/Users/TUF/Documents/FullStack/NODE.JS/index1.js'));

//NOTE path.basename 
console.log(path.basename('C:/Users/TUF/Documents/FullStack/NODE.JS/index1.js'));
//NOTE extension name 
console.log(path.extname('C:/Users/TUF/Documents/FullStack/NODE.JS/index1.js'));
//NOTE
console.log(path.parse('C:/Users/TUF/Documents/FullStack/NODE.JS/index1.js'));
//NOTE path resolve --gives absolute path
console.log(path.resolve('Users','TUF','Documents','FullStack','NODE.JS','index1.js'));
//NOTE join gives -- relative path
console.log(path.join('Users','TUF','Documents','FullStack','NODE.JS','index1.js'));

//__dirname
console.log(__dirname); //provides current dictory name
 //__filename
console.log(__filename); //provides current file name

const finalpath = path.join(__dirname,'index.txt')
fstat.readfile(finalpath,'ascii',(err,data)=>{
    console.log(data);
    
})

const http = require('http');
const server = http.createServer((req,res)=>
{
    res.end("data is send from the server");
})

server.listen(3000,()=>{
    console.log("Server is running");
    
})
// through port system's application is differentiated 
// host means system's ip
http => request , response 
// request as backend
// response as frontend 

//localhost 3000 in webbrowser 
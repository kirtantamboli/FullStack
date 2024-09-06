const http = require('http');
const server = http.createServer((req,res)=>
{   
    console.log(req.url);
    if(req.url==='/about'){
        res.end('about pages');
    }
    else if(req.url === '/services'){
        res.end('service page');
    }
    else{
        res.end('home page');
    }
    
    res.end("data is send from the server");
});

server.listen(3000,()=>{
    console.log("Server is running");
    
})
http => request , response 
// through port system's application is differentiated 
// host means system's ip

// request as backend
// response as frontend 

//localhost 3000 in webbrowser 
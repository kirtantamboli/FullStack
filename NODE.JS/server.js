const http = require('http');
const path = require('path');
const fs = require('fs');
const { EventEmitter } = require('stream');
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/about') {
    const filePath = path.join(__dirname, 'about.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.end('err');
      } else {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data);
      }
    });

    //NOTE always use writeHead method before sending the response
  } 
  else if (req.url === '/services') {
    res.end('service page');
  } else {
    // res.end('home page');
  }
});

server.listen(3000, () => {
  console.log('Server is running');
});

// http => request  , response

// npm i nodemon -g --save-dev

//methods we can use to send different 

const event = new EventEmitter() ;
event.on('party',()=>{
  console.log('party started');
  
})

//event.emit('party)
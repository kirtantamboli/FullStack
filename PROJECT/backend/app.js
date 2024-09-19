const express = require('express') ;
const app = express() ;
const dbConnect = require('./db')
const colors  = require("colors");
const routes = require("./routes/userRoutes.js")
const PORT = 3000 ;

//NOTE fn to connect with the mongodb
dbConnect() ;

app.use(express.json());
app.use('/api',routes);

//listening on the server
app.listen(PORT,()=>{
    console.log(colors.america(`App is listening on the port:${PORT}`))
})
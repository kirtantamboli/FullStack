const express = require('express');
const app = express();
const dbConnect = require('./db');
const PORT = 3000;
const colors = require('colors');
const cors = require('cors')
app.use(cors())
//NOTE fn to connect with the mongodb
dbConnect();

//NOTE middleware to parse the req.body data
app.use(express.json());

//NOTE Routes middleware
app.use('/api', require('./routes/userRoutes'));
app.use('/api',require('./routes/categoryRoute'));

//NOTE GLOBAL ROUTES HANDLER (middleware)
app.use((req, res, next) => {
  res.status(404).json({
    error: `Requested url ${req.url} not found`,
  });
  next();
});

//global error handler for our app this will send response for all the errors in our app

//listening on the server
app.listen(PORT, () => {
  console.log(colors.yellow(`App is listening on the port:${PORT}`));
});

// const express = require('express') ;
// const app = express() ;
// const dbConnect = require('./db')
// const colors  = require("colors");
// const routes = require("./routes/userRoutes.js")
// const PORT = 3000 ;

// //NOTE fn to connect with the mongodb
// dbConnect() ;

// app.use(express.json());
// app.use('/api',routes);

// //listening on the server
// app.listen(PORT,()=>{
//     console.log(colors.america(`App is listening on the port:${PORT}`))
// })
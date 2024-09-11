//middleware is used to modify req
app.use(express.json())

app.use((req,res,next)=>{
    console.log('middleware first');
    next()
})

app.use((req,res,next)=>{
    console.log('middleware second');
    next()
})
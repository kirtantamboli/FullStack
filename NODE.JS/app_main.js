const express = require('express')
const app = express();
const product = require('./products')
app.use(express.json());
app.use((req,res,next)=>{
    console.log("middleware first is running");
    next();
})
app.use((req,res,next)=>{
    console.log("middleware second is running");
    console.log(`${req.method} ${req.url}`);
    
    next();
})
app.get('/api/v1/getproduct', (req, res) => {
    // res.send(product)
    // res.status(400).send(product);
    res.status(200).json({
        length : product.length,
        data : product
    });
});
app.get('/api/v1/singleproduct/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    console.log(id);
    const filterProducts = product.filter((product)=>{
        return product.id === id
    })
    res.json({
        data : filterProducts
    })
});

// app.post('/api/v1/addproduct', (req, res) => {
//     const newData = req.body;
//     newData.id = product.length + 1;
//     product.push(newData);
//     res.json({
//         data: product
//     })
// })

// app.delete('/api/v1/deleteproduct/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const filterProducts = product.filter((product)=>{
//         return product.id !== id
//     })
//     res.json({
//         data : filterProducts
//     })
// })



app.listen(3000, () => {
    console.log('server is running');
})


// MIDDLEWARE IN THE EXPRESS

// We can create middleware using app.use() method
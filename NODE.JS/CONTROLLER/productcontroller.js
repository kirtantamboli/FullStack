exports.getAllProduct =(req,res)=>{
    console.log(req.name)
    res.status(200).json({
        length : product.length,
        data:product,
    });

    
}
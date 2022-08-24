import express from "express";
import data from "./data.js";

const app=express();

const port=process.env.PORT || 5000 ;

app.listen(port,()=>{
    console.log('server connected')
});

app.get('/api/products',(req,res)=>{
    res.send(data.products)
});

app.get('/api/products/slug/:slug',(req,res)=>{
    
    const item=data.products.find((x)=>x.slug === req.params.slug)
    if(item){
        res.send(item)
    }else{
        res.status(404).send({message : 'Product not found'})
    }

});
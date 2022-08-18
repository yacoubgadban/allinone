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
import express from "express"; import client from "prom-client";
const app=express(); client.collectDefaultMetrics();
app.get("/health",(_,res)=>res.json({ok:true}));
app.get("/metrics",async(_,res)=>{res.set("Content-Type",client.register.contentType);res.end(await client.register.metrics());});
app.listen(5000,()=>console.log("AAP on :5000"));

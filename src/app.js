const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("Testing");
});
app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello");
});
app.use("/",(req,res)=>{
    res.send("Hello HomePage");
});
app.listen(3000,()=>{
    console.log("Server is successfully listening to 3000");
})
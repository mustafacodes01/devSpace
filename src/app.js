const express = require("express");
const app = express();
// queries in route
app.get("/user/:userId/:name/:password",(req,res)=>{
console.log(req.params);
res.send({
    name : "Mustafa Hussain"
})
})

// params in route
// ':' means route is dynamic
app.listen(3000,()=>{
    console.log("Server is successfully listening to 3000");
})
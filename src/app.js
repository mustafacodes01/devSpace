const express = require("express");
const app = express();
app.use("/hello/yo",(req,res)=>{
    res.send("yoyo");
});
app.get("/user",(req,res)=>{
res.send({name: "Mustafa Hussain"})
});
app.post("/user",(req,res)=>{
res.send("saved data successfully")
});
app.delete("/user",(req,res)=>{
    res.send("Deleted data succesfully")
})
/* app.use("/test",(req,res)=>{
    res.send("Testing");
});
app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello");
});
app.use("/",(req,res)=>{
    res.send("Hello HomePage");
});*/

app.listen(3000,()=>{
    console.log("Server is successfully listening to 3000");
})
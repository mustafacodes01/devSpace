const express = require("express");
const app = express();
const {adminAuth,userAuth} = require("./middlewares/auth")
app.use("/admin",adminAuth);
app.get("/user",userAuth,(req,res)=>{
    res.send("user data send succesfully !")
})
app.get("/admin/getAllData",(req,res,next)=>{
    res.send("All data send ")
});
app.get("/admin/deleteUser",(req,res,next)=>{
    res.send("User deleted successfully!")
});

app.listen(3000,()=>{
    console.log("Server is successfully listening to 3000");
})
const adminAuth = (req,res,next)=>{
    console.log("User authenticaating")
    let token = "xyz"
    let isTokenValid = token==="xyz";
    if(!isTokenValid){
        res.send("Auth is not valid");
        res.status(401);
    }
    else{
        next();
    }

};
const userAuth = (req,res,next)=>{
    console.log("User authenticaating")
    let token = "xyz"
    let isTokenValid = token==="xyz";
    if(!isTokenValid){
        res.send("Auth is not valid");
        res.status(401);
    }
    else{
        next();
    }

};
module.exports = {
    adminAuth,
    userAuth,
}
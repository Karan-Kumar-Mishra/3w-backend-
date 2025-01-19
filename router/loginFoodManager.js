import express from "express"
const loginFoodManager=express.Router();

export default loginFoodManager.post('/',(req,res)=>{
  console.log("login the food magers");
  console.log(req.body);
  res.send({
    status:"ok"
  });
})

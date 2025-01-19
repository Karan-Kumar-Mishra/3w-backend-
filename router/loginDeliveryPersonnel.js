import express from "express"
const loginDeliveryPersonnel=express.Router();

export default loginDeliveryPersonnel.post('/',(req,res)=>{
  console.log("login loginDeliveryPersonnel");
  console.log(req.body);
  res.send({
    status:"ok"
  });
})
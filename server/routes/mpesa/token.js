const express = require("express");
const router=express.Router()
const {createToken,stkPush}= require("../../controllers/mpesa/token")

router.post("/",createToken,stkPush)

module.exports=router
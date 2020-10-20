const express=require('express')
const Customer=require('./customer')
const controller= require('./customer.controller')
const router=express.Router();
router.post('/',controller.create)
router.get('/me',Customer.customerAuth,controller.getUserInfo)

module.exports = router
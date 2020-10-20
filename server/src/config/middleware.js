const morgan=require ('morgan')
const express=require('express')
const isDev= require('../constants/index')

module.exports= app=>{
    app.use(morgan(isDev ? 'dev' : 'common'))
    app.use(express.json())}

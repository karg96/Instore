const express=require('express')
const middlewareConfig =require('./config/middleware')
require('./config/db')
const CustomerRoutes=require('./modules')
const app = express();

middlewareConfig(app)

app.get('/', (req,res)=>{
    res.send('Welcome')
});

app.use('/api/v1/customers',CustomerRoutes)

app.listen(3000, err=>{
    if(err){
        console.log(err)
    }else{
        console.log('Server started on port 3000')
    }
});
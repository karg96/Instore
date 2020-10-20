const yup=require('yup')
const CustomerModel=require('./customer.model')
const AuthProvider= require('../../services/authProvider/index')
const Customer=require('./customer')
const AuthServices=require('../../services/Auth')
const create= async(req,res)=>{
    const {token, provider} = req.body;

    const bodySchema= yup.object().shape({
        token: yup.string().required(),
        provider: yup.string().oneOf(CustomerModel.PROVIDER_ENUM).required()
    });
    try{
        let data
        await bodySchema.validate({token,provider})
        if(provider==='GOOGLE'){
         data = await AuthProvider(token)
            console.log('DATA', data)
        }else{
            res.sendStatus(500)
        }
        const customer=await Customer.getOrCreateCustomer(data,provider)
        
        const jwtToken=AuthServices.createToken(customer)
        
        res.status(200).json({token: jwtToken})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

const getUserInfo= async (req,res)=>{
    try {
        if(req.user){
            const userInfo= await Customer.me(req.user._id)
            res.status(200).json(userInfo)
        }else{
            res.status(400).json({message:'No User'})
        }
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

module.exports={
    create,
    getUserInfo
}
const CustomerModel=require('./customer.model')
const buildCustomerInfo=require('./buildCustomerInfo')
const AuthServices=require('../../services/Auth')
//middleware
const customerAuth= async(req,res,next)=>{
    const token=AuthServices.getTokenFromHeaders(req)
    if(!token){
        req.user=null
        return res.sendStatus(401);
    }
        // token is payload
    const customer = await CustomerModel.model.findById(token.id);

    if(!customer){
        req.user=null
        return res.sendStatus(401);
    }

    req.user=customer
    return next();
}



const getOrCreateCustomer= async (info, providerName)=>{
    const customerInfo= buildCustomerInfo(info, providerName)

    try{
        const _customer= await CustomerModel.model.findOne({email: customerInfo.email});

        const {provider, ...userInfo}= customerInfo

        if(!_customer){
            const customer= await CustomerModel.model.create({
                ...userInfo,
                provider:[provider]
            });
            console.log('CUSTOMER', customer)
            return customer;
        }

        const providerExist = _customer.provider.find(
            e=>
            e.uid===customerInfo.provider.uid &&
            e.type===customerInfo.provider.type,
        );

        if(providerExist){
            console.log("__CUSTOMER_1",_customer)
            return _customer
        }
            
        _customer.provider.push(customerInfo.provider)


        await _customer.save()
        console.log("__CUSTOMER",_customer)
        return _customer;
    }catch(error){
        throw error
    }


}

const me = async userId=>{
    try {
    const user= await CustomerModel.model.findById(userId)

    if(!user){
        throw new Error('User not exist')
    }
    return user;
    } catch (e) {
    throw error;
    }
}

module.exports={getOrCreateCustomer, customerAuth, me}

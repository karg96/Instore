const jwt=require('jsonwebtoken')

const JWT_SECRET= 'onlinestore1234'

const JWT_OPTS={
    issuer:'Kartik Store'
}

const createToken=user=>{
    if(!user && !user._id){
        return null
    }

    const payload={
        id:user._id
    }

    return jwt.sign(payload, JWT_SECRET,JWT_OPTS)

}

const verifyToken=token=>{
    return jwt.verify(token, JWT_SECRET,JWT_OPTS)

};

const getTokenFromHeaders=req=>{
    const token =req.headers.authorization;
    if(token){
        const arr= token.split(' ');

        if(arr[0]==='Bearer' && arr[1]){
            try{
                return verifyToken(arr[1])
            }catch(error){
                throw error
                return null
            }
        }
    }
};

module.exports={
    getTokenFromHeaders,
    verifyToken,
    createToken
}
const axios=require('axios')

const BASE_URL='https://www.googleapis.com/userinfo/v2/me';

const autSync= async token=>{
    try{
        const res= await axios.get(BASE_URL,{
            headers:{
                Authorization: `Bearer ${token}`
            },
        });

        if(res.status===200){
            return res.data;
        }
        throw new Error('No success with Google')

    }catch(error){
        throw error
    }
}

module.exports=autSync

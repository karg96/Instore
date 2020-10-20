const mongoose= require('mongoose')
const PROVIDER_ENUM=['FCAEBOOK','GOOGLE']
const CustomerSchema= mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{
        type: String,
        required: true,
        unique:true
    },
    avatarUrl: String,
    provider:[
        {
            uid:{required:true, type:String},
            type:{required:true, type: String, enum:PROVIDER_ENUM}
        },
    ],
},{timestamps:true});

CustomerSchema.index({email:1})
module.exports.PROVIDER_ENUM=PROVIDER_ENUM
module.exports.model=mongoose.model('Customer', CustomerSchema)



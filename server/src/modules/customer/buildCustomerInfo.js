const buildCustomerInfo=(info,providerName)=>{
    let user={
        email: '',
        firstName: '',
        lastName: '',
        avatarUrl: '',
        provider: {
          uid: '',
          type: '',
        },
    };


if (providerName ==='GOOGLE') {
    user.provider.uid=info.id,
    user.email=info.email,
    user.provider.type=providerName,
    user.firstName=info.given_name,
    user.lastName=info.family_name,
    user.avatarUrl=info.picture
}
return user;

};

module.exports=buildCustomerInfo
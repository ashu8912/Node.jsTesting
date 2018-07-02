const db=require('./db');
module.exports.handleSignUp=(email,password)=>{
//check if user already exist in database
db.saveUser({email,password})
//save user
}
const express = require('express')
const mongoose= require('mongoose')
const cors = require('cors')

const app= express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://umeshkhkhokhar444_db_user:nqf6lYtl72lq0cLU@cluster0.3ybvhu4.mongodb.net/ecommerce').then(()=>console.log('connected'))
.catch((error)=>console.log(error)
)
const userschema= new mongoose.Schema({
    name:String,
    password:String,
    age:Number,
    email:String
})
const user = mongoose.model('usersignupdatas',userschema)
app.post('/signup',async(req, resp)=>{
    try{
        const {name,email,password,confirmpassword}= req.body;

        if(!name || !email || !password || !confirmpassword){
            return resp.status(400).json({message:'all feilds required'})
        }
        if(confirmpassword!==password){
            return resp.json({message:'password do not match'})
        }
        let existinguser= await user.findOne({email})
        if(existinguser){
            return resp.json({message:'User already exist'})
        }
        const newuser= await user.create({
            name,
            email,
            password
        })
        console.log(req.body);

        resp.status(200).json({
            message:'user created successfully',
            user:newuser
        })
    }
        catch(error){
            console.log(error);
            resp.status(500).json({message:'server errror'})
        }
});
app.post('/login',async(req, resp)=>{
    try{

        let {email, password}= req.body;
        if(!email || !password){
         return  resp.json({message:'all feilds feilds required'})
        }
        const validuser = await user.findOne({email})
        if(!validuser){
          return resp.json({message:'no user exist'})
        }
        if(validuser.password!==password){
            return resp.json({message:'incorrect password'})
        }
     resp.status(200).json({
         message:'Login successfully',
        user:validuser
     })
        }catch(error){
            resp.status(500).json({message:'server error'})
        }
})

app.listen(3000)
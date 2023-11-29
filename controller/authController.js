import { hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js';
export const registerController=async(req,res)=>{
    try{
const {name,email,password,phone,address}=req.body
if(!name || name.trim() === '')
{
    return res.send({
        error:'Name is required'
    })
}
if(!email)
{
    return res.send({
        error:'Email is required'
    })
}if(!password)
{
    return res.send({
        error:'Password is required'
    })
}if(!phone)
{
    return res.send({
        error:'Phone is required'
    })
}if(!address)
{
    return res.send({
        error:'Address is required'
    })
}
const exsistingUser=await userModel.findOne({
    email
})
if (exsistingUser)
{
    return res.status(200).send({
        success: true,
        message:'Already registered! Please login',

    })
}
const hashedPassword=await hashPassword(password)
const user=new userModel({name,email,phone,address,password:hashedPassword}).save()
res.status(201).send({
    success:true,
    message:'User registered successfully',

    
})

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in registration',
            error
        })
    }
};


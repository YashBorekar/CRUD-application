import user from "../model/userModel.js"


export const create = async(req,res) =>{

    try{
       const newUser = new user(req.body);
       const{email} = newUser;
       
       const userExist = await user.findOne({email})
       if(userExist){
        return res.status(400).json({message:"User already exist"});
       }

       const savedData = await newUser.save();
       res.status(200).json(savedData);
    }catch(error){
       res.status(500).json({errorMessage:error.message});
    }
};



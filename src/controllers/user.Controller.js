import User from '../database/models/user.Model.js';

export const getUser = async (req,res) =>{

    try{

        const users = await User.findAll();

        res.json(users);

    }catch(error){

        return res.status(500).json({message:error.message});    
    }

    

};

export const createUser = async (req,res) =>{

    const {userName,password,email}  = req.body;

    try{
        
        const newUser = await User.create({userName:userName,password:password,email:email});

        res.json(newUser);

    }catch(error){

        return res.status(500).json({message:error.message});    
    }

    

};

export const updateUser = async(req,res) =>{
    
    const {id} = req.params;
    const {userName,email,password} = req.body;

    try{

       const updatedUser = await User.findByPk(id);

       updatedUser.userName = userName;
       updatedUser.password = password;
       updatedUser.email = email;

       await updatedUser.save();

       res.json(updatedUser);
    }

    catch(error){

        return res.status(500).json({message:error.message});    

    }
};

export const deleteUser = async(req,res) =>{
    
   try{
        const {id} = req.params;

        await User.destroy({
            where : {
                id,
            },
        });

        res.sendStatus(204);
    }
    catch(error){
    
        res.status(500).json({message:error.message});

    }
};

export const getUserById = async (req,res) =>{

    const {id}  = req.params;

    try{
        const userById = await User.findByPk(id);

        res.json(userById);

    }catch(error){

        return res.status(500).json({message:error.message});    
    }

};

export const getUserByUserName = async (req,res) =>{
    const {username}  = req.params;

    try{
        const userByUserName = await User.findOne({
            where : {
                userName : username
            }
        });

        res.json(userByUserName);

    }catch(error){

        return res.status(500).json({message:error.message});    
    }
}

export const getUserByEmail = async (req,res) =>{
    const {email}  = req.params;

    try{
        const userByEmail = await User.findOne({
            where : {
                email : email
            }
        });

        res.json(userByEmail);

    }catch(error){

        return res.status(500).json({message:error.message});    
    }
}

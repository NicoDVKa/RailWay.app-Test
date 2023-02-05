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

export const updateUser = async(req,res)=>{
    
    const {id} = req.params;
    const {name} = req.body;

    try{

       const updatedUser = await User.findByPk(id);

       updatedUser.name = name;

       await updatedUser.save();

       res.json(updatedUser);
    }

    catch(error){

        return res.status(500).json({message:error.message});    

    }
};

export const deleteUser = async(req,res)=>{
    
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

    debugger;

    const {id}  = req.params;

    try{

        const userById = await User.findByPk(id);

        res.json(userById);

    }catch(error){

        return res.status(500).json({message:error.message});    
    }

    

};
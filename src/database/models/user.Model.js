import { Model, DataTypes } from 'sequelize';
import sequelize from '../db.js';


class User extends Model {}

User.init({
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true 
    },
    userName : {
        type: DataTypes.STRING(30),
        allowNull: false,
        
    },
    password:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    sequelize,
    modelName : "User",
    timestamps : false
});

export default User;
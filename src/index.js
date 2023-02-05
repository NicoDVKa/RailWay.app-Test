import app from './app.js';
import sequelize from './database/db.js';
import {PORT} from './config.js'

//export Models
import  './database/models/user.Model.js';



app.listen(PORT, () => {
    console.log(`La app esta escuchando en el puerto: ${PORT}`);
    sequelize.sync({alter:true}).then( () => {
      console.log("Nos hemos conectado a la base de datos");
    }).catch(error =>{
       console.log("Se ha producido un error", error);
    })
});

const mongoose = require('mongoose');//Modulo para

//Configuración de los parametros de la base de datos
//uri: 'mongodb+srv://sistema_empleado:<password>@cluster0.4sily.mongodb.net/?retryWrites=true&w=majority';
dbparams ={
    //useCreateIndex: true,
    useNewUrlParser:true,
    //useFindAndModify:false,
    useUnifiedTopology:true
};

mongoose.connect('mongodb+srv://sistema_empleado:Max18450510@cluster0.4sily.mongodb.net/test?retryWrites=true&w=majority', dbparams)
        .then(db=> console.log('DB esta conectada'))
        .catch(err=>console.log(err));

module.exports = mongoose;
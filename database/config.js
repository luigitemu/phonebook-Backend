const mongoose = require("mongoose");

const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.MONGODB_CNN); 
        console.log('Data Base Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('There was a mistake on DB  ')
    }


}




module.exports =  dbConnection;
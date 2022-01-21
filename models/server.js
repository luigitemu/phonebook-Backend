const express = require("express");
const cors = require('cors');
const dbConnection = require("../database/config");


class Server {

    constructor(){

        this.app = express(); 
        this.port = process.env.PORT;
        this.contactPath = '/api/contacts'

        // Database concection
        this.connectDB();

        // middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    async connectDB(){
        await dbConnection(); 
    }
    listen(){
        this.app.listen( this.port , ()=>{
            console.log('Server running on port`: ' , this.port );
        } );
    }

    routes(){
        this.app.use(this.contactPath , require('../routes/contact.routes') );
    }

    middlewares(){
        // Express Body Parser 
        this.app.use( express.json())
        
        
        // public directory
        this.app.use(express.static('public'));
        
        //CORS
        this.app.use(cors()); 


    }

}





module.exports = Server;    
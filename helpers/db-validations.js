const Contact = require('../models/contact');

const phoneExist  = async (phone = '') => {

 // check if phone number exists in DB
    const existPhoneNumber = await Contact.findOne({phone});
    if(existPhoneNumber){
        throw new Error('Phone Number is already taken.');

    }

}


const contactExist = async(id )=>{

    const existContact = await Contact.findById(id);
    if(!existContact){
        throw new Error(`id: ${id} does not exist. `);

    }

}

module.exports ={
    phoneExist,
    contactExist
}
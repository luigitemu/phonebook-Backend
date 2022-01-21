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

const contactUpdateExist= async ( phone ='' , req  ) => {

    const existPhoneNumber = await Contact.findOne({phone});
    if(existPhoneNumber){
        if(existPhoneNumber._id != req.params.id){
            throw new Error(`The phone number ${phone} is already taken `);

        }
    }



}


module.exports ={
    phoneExist,
    contactExist,
    contactUpdateExist
}
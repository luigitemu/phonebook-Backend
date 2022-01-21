const {response, request } = require('express');
const Contact = require('../models/contact');



const getContacts = async (req = request , res = response)=>{


   
    const contacts = await Contact.find();


    res.status(200).json({
        contacts
    });

}

const postContact = async (req = request , res = response)=>{

    const { firstName , lastName , phone   } = req.body;
    const contact = new Contact({firstName , lastName , phone});
    //

    try {
        await contact.save();
        res.status(201).json({
        contact 
    });
    } catch (error) {
        res.status(500).json(e);
    }
     
    



}
const putContact = async (req = request , res = response)=>{

    const {id } = req.params;
    //TODO:  update phone
    const  { _id , ...rest}  = req.body;

    try {
        const contact = await Contact.findByIdAndUpdate( id , rest ,{ new:true}  );
        
        res.status(202).json({
            contact
        });
    } catch (error) {
        res.status(500).json(e);
    }



}
const deleteContact = async (req = request , res = response)=>{

    const {id } = req.params;

    try {
        const contact = await Contact.findByIdAndDelete(id);
        res.json(contact );
        
    } catch (error) {
        res.status(500).json(e);
    }    

}





module.exports = {
    getContacts,
    postContact,
    putContact,
    deleteContact
}
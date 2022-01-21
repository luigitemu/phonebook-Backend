const {response, request } = require('express');
const Contact = require('../models/contact');



const getContacts = async (req = request , res = response)=>{

    const {limit = 5 , from = 0 } = req.query;


    const [total , contacts] = await Promise.all([
        Contact.countDocuments(),
        Contact.find()
                .skip(Number(from))
                .limit(Number(limit) )

    ])


    res.status(200).json({
        total,
        contacts
    });

}

const postContact = async (req = request , res = response)=>{

    const { firstName , lastName , phone   } = req.body;
    const contact = new Contact({firstName , lastName , phone});
    //
    await contact.save();
     
    
    res.status(201).json({
        contact 
    });



}
const putContact = async (req = request , res = response)=>{

    const {id } = req.params;
    //TODO:  update phone
    const  { _id ,phone , ...rest}  = req.body;


    const contact = await Contact.findByIdAndUpdate( id , rest  );

    res.status(202).json({
        contact
    });

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
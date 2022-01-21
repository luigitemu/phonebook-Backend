const {Schema , model } = require('mongoose');



const ContactSchema = Schema({
    firstName: {
        type: String,
        required: [true , 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true , 'Last Name is required']
    },
    phone: {
        type: String,
        required: [true , 'Phone  is required'],
        unique: true
    },
});


module.exports = model('Contact' , ContactSchema);
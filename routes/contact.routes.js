const { Router } = require("express");
const { check } = require("express-validator");
const { getContacts, postContact, putContact, deleteContact } = require("../controllers/contacts");
const { phoneExist, contactExist, contactUpdateExist } = require("../helpers/db-validations");
const validateData = require("../middlewares/validate-data");

const router = Router();



router.get('/' ,getContacts);
router.post( '/' , [
    check('firstName'   ,'firstName is required').not().isEmpty(),
    check('lastName'    ,'lastName is required').not().isEmpty(),
    check('phone'       ,'firstName is required').not().isEmpty(),
    check('phone').custom( phoneExist ),
    validateData
],  postContact);


router.put('/:id' ,[
    check('id' ,'Is not a valid ID').isMongoId(),
    check('id').custom( contactExist ),
    check('phone').custom( ( phone ,  { req } )=> contactUpdateExist(phone , req  ) ),
    validateData
], putContact);



router.delete( '/:id' ,[
    check('id' ,'Is not a valid ID').isMongoId(),
    check('id').custom( contactExist ),
    validateData
], deleteContact);








module.exports = router;
const express = require('express');
const router = express.Router();

const login_controller_pointer=require("../controller/login");
router.post('/createlogin',login_controller_pointer.createlogin);
router.get('/getlogin/:id',login_controller_pointer.getlogin);


module.exports=router;


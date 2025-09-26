const {signUp} = require('../controller/userController')
const router = require('express').Router()
 

router.post('/user', signUp)


module.exports=router
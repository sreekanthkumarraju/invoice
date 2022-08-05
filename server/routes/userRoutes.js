const express =require('express')
const { signin, signup, forgotPassword, resetPassword } =require('../controllers/user.js')

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/forgot', forgotPassword);
 router.post('/reset', resetPassword);
module.exports=router
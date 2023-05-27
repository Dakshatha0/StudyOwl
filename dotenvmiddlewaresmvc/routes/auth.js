const router = require('express').Router();
const {loginController} = require('../controllers/auth');
router.post('/login', loginController)

module.exports = router;
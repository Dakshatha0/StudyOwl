
const loginController = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(402).send('Login credentials invalid');
    }
    const oldEmail = findOne(email);
    if(oldEmail) {
        
    }
}

module.exports = {
    loginController
}
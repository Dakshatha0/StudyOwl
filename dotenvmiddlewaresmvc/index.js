const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PostRouter = require('./routes/post');
const AuthRouter = require('./routes/auth');
dotenv.config('./.env');

app.use((req, res, next)=> {
    console.log('I am here');
    next();
})
app.use('/post', PostRouter);
app.use('/auth', AuthRouter);
app.get('/', (req, res) => {
    res.send({
        data: 'ok'
    });
})
app.listen(process.env.PORT, ()=>{
    console.log('Listening on: ', process.env.PORT);
})
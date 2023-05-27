const {multiply, log} = require('./utils'); //Common JS syntax
// console.log(multiply(4,5));
// log.warning('this is jusgt an info');
// log.error('this is an error');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get('/user', (req, res) => {
    console.log('this is user router');
    //res.send('This is express js');
    res.send({
        name: 'Dakshatha',
        age: 19,
    })
});

app.get('/rando', (req, res) => {
    const rand = Math.floor(Math.random()*6)+1;
    console.log(Number(rand));
    res.send(rand.toString());
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.json({
        name: 'Dakshatha',
        age: 24,
        additionResult: req.body.nani + req.body.dad
    });
});

app.post('/sum', (req, res) => {
    const arr = req.body.arr;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    res.json({
        sumResult: sum
    })
})

app.post('/avge', (req, res) => {
    try {
        const arr = req.body.arr;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum /= arr.length;
    res.json({
        sumResult: sum
    })
    } catch (error) {
        console.log(error);
    }
})

// app.listen(4002, () => {
//     console.log('Listening on port: 4002');
// });
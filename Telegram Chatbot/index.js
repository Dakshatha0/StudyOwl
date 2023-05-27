var TelegramBot = require("node-telegram-bot-api");
var token = "5903364184:AAGgzrkowDI0RQcB8-7T9jO-c7hE53PCLk4";

const admin = require("firebase-admin");



const bot = new TelegramBot(token, {polling:true});
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id,`Hi!. This is my new Telegram ChatBot. What do you want to know about?`);
       
    bot.sendMessage(msg.chat.id,"Warning: If you send me something and your keyword is not on my default list, it means your text doesnt have a keyword that I understand.");
})
bot.onText(/\/vedic/, (msg) => {

    bot.sendMessage(msg.chat.id,`Here is the link to the vedic website: https://vedic.dev/`);
       
    bot.sendMessage(msg.chat.id,"Here you can solve and watch videos related to fullstack i.e HTML, CSS, JaavScript, Node js, Database, Express js");
})
bot.onText(/\/javascript/, (msg) => {

    bot.sendMessage(msg.chat.id,`Links to learn more about javascript:`);
    bot.sendMessage(msg.chat.id,"https://www.javascript.com/");
    bot.sendMessage(msg.chat.id,"https://developer.mozilla.org/en-US/docs/Web/JavaScript");
    bot.sendMessage(msg.chat.id,"https://www.w3schools.com/js/");
})
bot.onText(/\/node.js/, (msg) => {

    bot.sendMessage(msg.chat.id,`Links to learn more about Node js:`);
    bot.sendMessage(msg.chat.id,"https://nodejs.org/en/");
    bot.sendMessage(msg.chat.id,"https://www.w3schools.com/nodejs/");
    bot.sendMessage(msg.chat.id,"https://nodejs.dev/en/");
})
bot.onText(/\/express.js/, (msg) => {

    bot.sendMessage(msg.chat.id,`Links to learn more about Express js:`);
    bot.sendMessage(msg.chat.id,"https://expressjs.com/");
    bot.sendMessage(msg.chat.id,"https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm");
    bot.sendMessage(msg.chat.id,"https://www.javatpoint.com/expressjs-tutorial");
})
bot.onText(/\/database/, (msg) => {

    bot.sendMessage(msg.chat.id,`Links to learn more about Databases:`);
    bot.sendMessage(msg.chat.id,"Mongo DB");
    bot.sendMessage(msg.chat.id,"https://www.mongodb.com/");
    bot.sendMessage(msg.chat.id,"Firestore");
    bot.sendMessage(msg.chat.id,"https://firebase.google.com/products/firestore?gclsrc=ds&gclsrc=ds&gclid=CNnJ6MTW7PsCFQp1jgodfvYNGg");
})
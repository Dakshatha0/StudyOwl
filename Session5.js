var datastore = require("nedb");
var db = new datastore({filename:"datafile",autoload: true});

var docss = {
    name:"Daksh",
    email:"lastuf@gmail.com",
    phone:"637829",
    score:[8.0,9.0,12.0]
};
// db.insert(docss,function(err,newDocss){
//     if(err){
//         console.log("sorry.. something went wrong");
//     }
//     else{
//         console.log("inserted successfully");
//     }
// });
db.find({name:"Daksh",email:"lastuf@gmail.com"},function(err,docs){
    console.log(docs);
})

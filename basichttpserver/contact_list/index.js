const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    // console.log(__dirname);
    // res.send('yes, you have landed on profile page only');
    return res.render('home',{title:"my contact list"});
});

app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"let's practice ejs"
    });
});



app.listen(port , function(err){
    if(err){console.log('error in running the server');}

    console.log('server is running on port', port);
})
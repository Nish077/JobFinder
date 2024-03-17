const express = require('express');
const app=express();
const path= require('path');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const recruiter =require('./database/schema');
const rec_prof =require('./database/schema');


require('./database/connection');


app.post('/Register', async (req,res)=>{
try{
 const recruiter1 = new recruiter({
    username : req.body.myusername,
    password : req.body.mypass
 })
 const model1 =await recruiter1.save();
 res.status(201).sendFile(path.join(__dirname,'public','profile_form.html'));
}
catch(error){
   res.status(400).send(error); 
}
})




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/Register',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Register.html'));
});

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','home.html'));
});
app.get('/loginpage',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','loginpage.html'));
});
app.get('/background_image.jpg',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','background_image.jpg'));
});
app.get('/user_login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','user_login.html'));
});
app.get('/style',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','style.css'),{headers : {
        'Content-Type': 'text/css'}  });
});
app.get('/yes',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','yes.html'));
});
app.get('/signup.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signup.js'));
});
app.get('/profile_form',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','profile_form.html'));
});
app.get('/recruiter',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','recruiter.html'));
});
app.get('/rec.png',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','rec.png'));
});
app.get('/rev.jpg',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','rev.jpg'));
});
app.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','profile.html'));
});



const port=5000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})



/*quering the database */

const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
  username: String,
  password :String
});


const User= mongoose.model('recruiter', mySchema);
app.post('/loginpage', (req, res) => {
    const username=req.body.myusername;
    const pass=req.body.mypassword;
    User.find({username : username ,password :pass}).then(users=>{
        console.log(users);
        res.status(201).sendFile(path.join(__dirname,'public','recruiter.html'));
    })
    .catch(err=>{
        console.log(err);
        res.status(400).sendFile(path.join(__dirname,'public','loginpage.html'));
    })
});
  
  


app.post('/profile_form', async (req,res)=>{
    try{
        const profile = new rec_prof({
          name1 :req.body.myname,
          age :req.body.myage,
          address :req.body.myaddress,
          company :req.body.mycompany,
          username :req.body.myusername,
        })
        const model2 =await profile.save();
        res.status(201).sendFile(path.join(__dirname,'public','recruiter.html'));
       }
       catch(error){
          res.status(400).send(error); 
       }
})





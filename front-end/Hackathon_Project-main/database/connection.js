const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/Hiring",{
    useNewUrlParser :true,
    useUnifiedTopology :true,
    
}).then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{
  console.log(e);
})

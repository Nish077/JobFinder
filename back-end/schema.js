const mongoose =require('mongoose');
const recruiter_login_detail =new mongoose.Schema({
   username :{
    type :String,
    required :true
   } ,
    password :{
    type : String,
    required :true
   }
})
const recruiter_profile =new mongoose.Schema({
   name1 :{
      type :String,
      required :true
   },
   age :{
      type :Number,
      required :true
   },
   address :{
      type :String,
      required :true
   },
   company :{
      type :String,
      required :true
   },
   username :{
      type :String,
      required :true
   }
})

const rec_prof = new mongoose.model("Recruiter_profile",recruiter_profile);

const recruiter = new mongoose.model("Recruiter",recruiter_login_detail);


module.exports =recruiter;
module.exports=rec_prof;

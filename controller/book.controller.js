const {userModel}=require('../models/user.model');

const getBooks=async=(req,res)=>{
    const {email}=req.query;

    userModel.findOne({ email: email }, (error, user) => {

        if (user === null) {
          res.send('no data was found');
        } else {
          res.json(user.books);
          console.log(user);
        }
      });
}


module.exports={getBooks};
const {userModel}=require('../models/user.model');

const getBooks=async(req,res)=>{
    const {email}=req.query;

    userModel.findOne({ email: email }, (error, user) => {

        if (user === null) {
          res.send('no data was found');
        } else {
          res.json(user.books);
          // console.log(user.books);
        }
      });
};

const createBook=async(req,res)=>{
    console.log(req.body);
  const title=req.body.title;
  const description=req.body.description;
  const status=req.body.status;
  const email=req.body.email;

  // const{
  //   title,description,status,email
  // }=req.body;
  const newBookObj=new userModel({
    title,
    description,
    status,
    email
  });
  
  newBookObj.save();
  res.json(newBookObj);
}



module.exports={getBooks, createBook};
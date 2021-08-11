const { bookModel } = require('../models/bookModel');

const getBooks = async (req, res) => {
  const { email } = req.query;

  bookModel.find({ email: email }, (error, userBooks) => {

    if (userBooks === null) {
      res.send('no data was found');
    } else {
      res.json(userBooks);
      // console.log(user, 'USER');
      // console.log(user.books, 'USER.BOOKS')
    }
  });
};

const createBook = async (req, res) => {
  // console.log(req.body);
  const email = req.body.email;
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;

  const newBookObj = new bookModel({
    email,
    title,
    description,
    status
  });

  newBookObj.save();
  res.json(newBookObj);
};

const deleteBook = async (req, res) => {
  const bookId = req.params.book_id;
  bookModel.deleteOne({ _id: bookId }, (error, deleted) => {
    res.send(deleted);
    console.log(bookId);
  });
}
  const updateBook = async (req, res) => {
    const bookId = req.params.book_id;
    const {
      title,
      description,
      img,
      status
    } = req.body;
    
    bookModel.findByIdAndUpdate(
      { _id: bookId }, {
      title: title,
      description: description,
      img: img,
      status: status

    }, { new: true },
      (error, data) => {
        res.json(data);
      });


  }




module.exports = { getBooks, 
  createBook, 
  deleteBook, 
  updateBook }
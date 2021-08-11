const mongoose = require('mongoose');
const bookSchema = require('./bookSchema');
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  books: [
    bookSchema
  ]

});

const userModel = mongoose.model('users', userSchema);

const seedUserCollection = () => {
  try {
    const firstUser = new userModel({
      email: 'rawanazazi12@gmail.com',
      books: [
        {
          img:'https://m.media-amazon.com/images/I/51j3Z4ZZA7L.jpg',
          title: 'Sleeping Murder',
          description: "Sleeping Murder: Miss Marple's Last Case is a work of detective fiction by Agatha Christie and first published in the UK by the Collins Crime Club in October 1976[1] and in the US by Dodd, Mead and Company later in the same year.",
          status: 'Published',
          email: 'rawanazazi12@gmail.com'
        },
        {
          img:'https://images-na.ssl-images-amazon.com/images/I/61P59PpiquS.jpg',
          title: 'Good Vibes Good Life',
          description: "Good Vibes, Good Life: How Self-Love Is the Key to Unlocking Your Greatness (Paperback) Upbeat, empathetic and dynamic, Instagram sensation Vex King outlines the lessons in positivity and self-love that have helped them through adversity and how they can work for everybody.",
          status: 'Published',
          email: 'rawanazazi12@gmail.com'
        },
        { 
          img:'https://target.scene7.com/is/image/Target/GUEST_22f77897-58bc-40a6-8e67-b3cc04d66215?wid=488&hei=488&fmt=pjpeg',
          title: 'All the Light We Cannot See',
          description: "A beautiful, stunningly ambitious novel about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II.",
          status: 'Published',
          email: 'rawanazazi12@gmail.com'
        }
      ]

    });

    const secondUser = new userModel({
      email: 'tashtoshqusai@gmail.com',
      books: [
        {
          img:'https://kbimages1-a.akamaihd.net/bb3be409-c935-41e4-b393-2d8ab558c917/353/569/90/False/red-queen-6.jpg',
          title: 'Red Queen',
          description: 'Red Queen, by #1 New York Times bestselling author Victoria Aveyard, is a sweeping tale of power, intrigue, and betrayal, perfect for fans of George R.R. Martin\'s Game of Thrones series.',
          status: 'Published',
          email: 'tashtoshqusai@gmail.com'
        },
        {
          img:'https://target.scene7.com/is/image/Target/GUEST_a476fa0f-bbca-49be-95c8-37460db1464f?wid=488&hei=488&fmt=pjpeg',
          title: 'Silent Patient',
          description: 'The Silent Patient is a 2019 psychological thriller novel written by British–Cypriot author Alex Michaelides. The debut novel was published by Celadon Books, a division of Macmillan Publishers, on 5 February 2019. The audiobook version, released on the same date, is read by Louise Brealey and Jack Hawkins. The story is narrated by an English psychotherapist, Theo Faber, dealing with a patient who turns mute after murdering her husband. Upon its release, the book debuted on The New York Times Best Seller list at No.1.It later won the Goodreads Choice Award 2019 in the Mystery and Thriller category.',
          status: 'Published',
          email: 'tashtoshqusai@gmail.com'
        },
        {
          img:'https://images-na.ssl-images-amazon.com/images/I/71PubYE8qPL.jpg',
          title: 'The Untethered Soul : The Journey Beyond Yourself',
          description: 'Divided into five parts, the book offers a frank and friendly discussion of consciousness and how we can develop it. In part one, he examines the notion of self and the inner dialogue that all of us live with. Part two examines the experience of energy as it flows through us and works to show readers how to open their hearts to the energy of experience that permeates their lives.',
          status: 'Published',
          email: 'tashtoshqusai@gmail.com'
        }
      ]

    })
    firstUser.save();
    secondUser.save();
  }
  catch (error) { console.log("Error while creating the user: ", error.message) }



}




module.exports ={userModel,
  seedUserCollection} ;

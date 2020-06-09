const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const Subject = require('./client/src/models/Subject')

const User = require('./models/userModel');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;



const MONGODB_URI = 'mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority'
// const MONGODB_URI = 'mongodb://localhost/portfoliopiece';
//'mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI,{useNewUrlParser: true,
  useUnifiedTopology:true})
  .then(() => {
    console.log("Connected to Mongo");
  })
   .catch(err => {
     console.error("Could not connect to Mongo", err)
      process.exit();
   });

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/subjects', (req, res) =>{

  Subject.find({}).sort({})
    .then((data) =>{
      console.log('Data: ',data);
      res.json(data);
    })
    .catch((error) =>{
      console.log('error');
    });

});
// demo endpoint
app.post('/updateUser',(req,res)=>{
    // fake user
    User.create({
        userName: 'anonymous'
    }).then(user => {
        console.log(user)
        user.update(req.body)
    })

})


//HTTP request logger
app.use(morgan('tiny'));

// launch our backend into a port
app.listen(PORT, console.log(`LISTENING ON PORT ${PORT}`));

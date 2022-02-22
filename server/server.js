const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
 
const uri = process.env.ATLAS_URI;
    
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }   );

// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } , function (err) {
//     if (err) throw err;
//     console.log('Successfully connected  ---333333');
//  });
 
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully  ----22222");
})

// Привязать подключение к событию ошибки  (получать сообщения об ошибках подключения)
// connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
const wordsRouter = require('./routes/words');
const usersRouter = require('./routes/users');
// const textsRouter = require('./routes/texts');
 
app.use('/words', wordsRouter);
app.use('/users', usersRouter);
// app.use('/texts', textsRouter);
 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}  -----111111`);
});

const router = require('express').Router();
let Word = require('../models/word.model');
let ArrWordsModel = require('../models/arrWords.model');


router.route('/').get((req, res) => {
  Word.find()
    .then(words => res.json(words))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {

  console.log(`req.body---`,req.body);

  const username = req.body.username;
  const description = req.body.description;
  const translation = req.body.translation;
  const date = Date.parse(req.body.date);

  let d = new Date(new Date().toLocaleString("en-US", {timeZone: "timezone id"})); // timezone ex: Asia/Jerusalem
  
  const newWord = new Word({
    username,
    description,
    translation,
    date,
  });

  console.log(`newWord----111`, newWord)

    newWord.save()
  .then(() => res.json('Word added!!!!11111'))
  .catch(err => res.status(400).json('Error: ' + err));
});


  
router.route('/addArr').post((req, res) => {
  
  const vrem = req.body;

  console.log(`vrem---(server)`,vrem);
  console.log(`vrem.length---(server)`,vrem.length);
 
  ArrWordsModel.insertMany( vrem,  function(err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted successfully !");
  });


  // Model.insertMany(array)
  // .then(function (docs) {
  //     response.json(docs);
  // })
  // .catch(function (err) {
  //     response.status(500).send(err);
  // });

   
});



  // ==========================================================================================
  

router.route('/:id').get((req, res) => {
  Word.findById(req.params.id)
    .then(word => res.json(word))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Word.findByIdAndDelete(req.params.id)
    .then(() => res.json('Word deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Word.findById(req.params.id)
    .then(word => {
      word.username = req.body.username;
      word.description = req.body.description;
      word.translation = req.body.translation;
      word.date = Date.parse(req.body.date);

      word.save()
        .then(() => res.json('Word updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
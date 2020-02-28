const router = require('express').Router();
const HowTo = require('./how-to-model.js');
const auth = require('../data/auth-middleware.js');
const userAuth = require('../data/creator-middleware.js');

router.get('/', auth, (req, res) => {
  HowTo.find()
    .then(howToList => {
      if (howToList) {
        res.status(200).json(howToList);
      } else {
        res.status(401).json({ message: 'no how-to guides exist' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: 'error getting info from database', error: err });
    });
});

router.post('/newhowto', auth, userAuth, (req, res) => {
  const newHowTo = req.body;

  if (newHowTo.title && newHowTo.steps && newHowTo.user_id) {
    HowTo.addHowTo(newHowTo)
      .then(added => {
        res.status(201).json({ new_how_to: added, message: 'how to created' });
      })
      .catch(err => {
        res
          .status(500)
          .json({ errorMessage: 'how to could not be added', error: err });
      });
  } else {
    res
      .status(400)
      .json({ message: 'Please provide at least a title, and steps' });
  }
});

//todo - delete how to

//todo - edit a how to

//todo - search and find specific how to

module.exports = router;

const c = require('../config');
const express = require('express');
const path = require('path');
const router = express.Router();
const {bets} = require('../data');

router.use((req, res, next) => {
  console.log("bet.js req.session.AuthCookie: " + req.session.AuthCookie);
  if (!req.session.AuthCookie)
    res.redirect('/');
  else
    next();
});

router.get('/', async (req, res) => {
  try {
    res.render('bet', {});
  }
  catch (e) {
    res.status(500).send(`route: / ${e}`);
  }
});

router.post('/', async (req, res) => {
  try {
    //console.log(req.body);
    const x = await bets.submitPanel(req.body);
    res.status(x.status).send(x);
  }
  catch (e) {
    res.status(500).send(`route: / ${e}`);
  }
});

module.exports = router;


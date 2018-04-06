var express = require('express');
var router = express.Router();
var stripe = require('stripe')("sk_test_kcqmWMMYUNJ7cVKnD6wJwPwm");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/stripe', function (req, res, next) {
  console.log(req.body)
  stripe.charges.create({
    amount: req.body.amount,
    currency: "usd",
    description: req.body.token.email,
     source: req.body.token.id,
  }, function(err, charge) {
    if(err)
    {
      console.log(err);
      return res.status(401).json({ errors: {'stripe': ["error occured during payment"]}}); 
    }
    else
    {
      return res.json("successfully Paid"
      );
    }
  });
 
});



module.exports = router;

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpConfig = require('../bin/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome, my dear guest!' });
});

// router.get('/some', function(req, res){
// 	res.render('some');
// });

router.post('/', function(req, res) {
	var visitorName = req.body.visitorName;
	var visitorEmail = req.body.visitorEmail;
	var visitorMessage = req.body.visitorMessage;
	console.log(visitorEmail);
	console.log(visitorName);


	var transporter = nodemailer.createTransport(smtpConfig);
	var mailOptions = {
		from: {
			name: visitorName,
			address: visitorEmail
		},
		to: "developing.frontend@gmail.com", 
		replyTo: visitorEmail,
		subject: "This message from my site",
		text: visitorMessage
	}

	transporter.sendMail(mailOptions, function(error, info) {
		if(error) {
			console.log("Error");
			res.json({
				blablabla: "Error"
			})
		}
		else {
			console.log("Message is sent: " + info.response)
		}
	});
});

// router.get('/page2', function(req, res, next) {
//   res.render('page2');
// });

module.exports = router;

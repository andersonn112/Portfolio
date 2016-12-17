var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + 'index.html'));

});


//post router
router.post('/send', function (req,res,next){
  var transport = nodemailer.createTransport({
//service and credentials
service: 'Gmail',
auth: {
  user: 'andersnateb@gmail.com',
  pass: 'football30'
}
  });
  var mailOp = {
    from: 'Resume Site - <andersnateb@gmail.com>',
    to: 'nathananderson2003@yahoo.com',
    subject: 'Contact Form',
    //text version
    text: 'You have a new message from' + req.body.name + '@nathansresume.com\n'+ 'Email:' + req.body.email + 'Message:' + req.body.message,
    html: '<h3>You have a new message !</h3><br/>From:' + req.body.name + '<br/><br/>' + 'Email:' + req.body.email + '<br/><br/>' + 'Message:' + req.body.message, 
  };
  transport.sendMail(mailOp,function(error,info){
    if(error){
      console.log('Email could not be sent!\n' + error);
      res.redirect('/');
    }else{
      console.log('Message sent succesfully!\n'+ info.response);
      res.redirect('/');
    }

  });
});
module.exports = router;


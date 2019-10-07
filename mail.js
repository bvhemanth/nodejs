

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'hemanthkumar.bv@newage-global.com',
    pass: 'Newage@123'
  }
});

var mailOptions = {
  from: 'hemanthkumar.bv@newage-global.com',
  to: 'hemanthkumar.bv@newage-global.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
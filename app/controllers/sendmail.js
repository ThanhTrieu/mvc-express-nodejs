"use strict";
const nodemailer = require("nodemailer");

exports.index = (req, res) => {
    const data = {
        title: 'Send-mail',
    }  
    res.render('sendmail/index', data);
}

exports.sendEmail = async (req, res) => {
    if(req.method == "POST"){
        let email = req.body.email;
        let subject = req.body.subject;
        let content = req.body.content;

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        //let testAccount = await nodemailer.createTestAccount();
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'trieuntgvt3h@gmail.com', // generated ethereal user
                pass: 'trieunt123' // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'trieuntgvt3h@gmail.com', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: content, // plain text body
            html: `<b>${content}</b>` // html body
        });
    }
    res.send('ok');
}
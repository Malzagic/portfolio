const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

const password = process.env.GMAIL_PASSWORD;



router.post('/', (req, res) => {
    const body = req.body;

    // Process the form data, send emails, or perform any necessary actions here
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'przemek2142@gmail.com',
            pass: password,
        }
    });

    const mailOptions = {
        from: body.email,
        to: 'przemek2142@gmail.com',
        subject: `Message from ${body.email}`,
        text: body.message,
    }


    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send({message: 'error'});
        } else {
            console.log('Email send! ' + info.response)
            res.send({message: 'Success!'})
        }
    })

    res.status(200).json({ message: 'Email sent successfully' });
});


module.exports = router;
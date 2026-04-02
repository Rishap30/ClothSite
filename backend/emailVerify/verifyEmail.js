import nodemailer from "nodemailer";
import "dotenv/config";

export const verifyEmail = async (token, email) => {

    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    let mailConfigurations = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Email Verification",
        text: `Please verify your email by clicking the link http://localhost:5173/verify?token=${token}`
    };

    await mailTransporter.sendMail(mailConfigurations, function(error, info){
        if (error) throw Error(error)
            console.log('Email sent Successfully');
        console.log(info);
    }) ;
};
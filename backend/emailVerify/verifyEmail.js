import nodemailer from "nodemailer";
import "dotenv/config";

export const verifyEmail = (token, email) => {

    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    let mailDetails = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Email Verification",
        text: `Please verify your email by clicking the link http://localhost:5173/verify/${token}`
    };

    mailTransporter.sendMail(mailDetails, (err, data) => {
        if (err) {
            console.log("Error sending email:", err);
        } else {
            console.log("Email sent successfully ✅");
        }
    });
};
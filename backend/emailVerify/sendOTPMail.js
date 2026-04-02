import nodemailer from "nodemailer";
import "dotenv/config";

export const sendOTPMail = async (otp, email) => {

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
        subject: "Password Reset OTP",
        html: `<p>Your OTP for password reset is:<b>${otp}</B></p> `
    };

    mailTransporter.sendMail(mailDetails, (error, data) => {
        if (error) throw Error(error)
        console.log("OTP Sent Successfully")
        console.log(data)
    });
};
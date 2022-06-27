export default function a(req, res) {
  require("dotenv").config();

  try {
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "chaimaemichich@gmail.com",
        pass: process.env.password,
      },
      secure: true,
    });
    const mailData = {
      from: "demo email",
      to: "chaimaemichich@gmail.com",
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };
    console.log(mailData);
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.status(200).json({
      status: "ok",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
    });
  }
}

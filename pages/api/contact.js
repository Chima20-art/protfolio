export default function a(req, res) {
  console.log(req.body);

  let nodeMailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "demo@demo.gmail",
      pass: "password",
    },
    secure: true,
  });
}

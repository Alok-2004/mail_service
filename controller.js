import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import dotenv from "dotenv";

dotenv.config();

const signup = async (req, res) => {
    try {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        let message = {
            from: '"Exploit Arena" <exploitarena@gmail.com>',
            to: "alokprasad02004@gmail.com", // List of receivers
            subject: "Checking Mail functionality",
            text: "Hello World",
            html: "<b>Hello World</b>",
        };

        await transporter.sendMail(message);
        res.status(200).send("Mail sent successfully");
    } catch (err) {
        res.status(500).send("Mail not sent: " + err.message);
    }
};

const forgetPassword = async (req, res) => {
    try {
        let config = {
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        };

        let transporter = nodemailer.createTransport(config);

        let mailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "ExploitArena",
                link: "https://your-website-link.com",
            },
        });

        let response = {
            body: {
                name: "Alok Prasad",
                intro: "Your Bill is generated",
                table: {
                    data: [
                        { item: "Mango", description: "Mango", price: "$5.00" },
                        { item: "Apple", description: "Apple", price: "$10.00" },
                    ],
                    columns: {
                        customWidth: { item: "20%", price: "15%" },
                        customAlignment: { price: "right" },
                    },
                },
            },
        };

        let mail = mailGenerator.generate(response);

        let message = {
            from: process.env.EMAIL,
            to: "random@gmail.com",
            subject: "Your Bill",
            html: mail,
        };

        await transporter.sendMail(message);
        res.status(200).send("Mail sent successfully");
    } catch (err) {
        res.status(500).send("Mail not sent: " + err.message);
    }
};

export { signup, forgetPassword };

import { Compare } from "../lib/bcrypt";
import { Router } from "express";
import { MessageModel, IMessage } from "../models/message";
import { SendMail } from '../lib/nodemailer';
const routes = Router();

routes.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;

    if(await Compare("$2a$06$UhA9rngjmkWHluMZldKmIuz0MWA0hHLagqP0kPi6edAE7wMSy0aX6", email) == false){
        return res.status(500).json({ error: "Sorry, something went wrong :/" });
    }

    const messages: IMessage[] = await MessageModel.find();

    const random = Math.floor(Math.random() * messages.length);

    const myMessage = await MessageModel.findOne({consecutivo: random+1})

    if(myMessage){
        const htmlMessage = `<h1>${myMessage?.message}</h1>`;
        const sendedMail = SendMail(htmlMessage, "Rebe Vallejos")
    }

    res.send("The Message was sended")
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});


export default routes;

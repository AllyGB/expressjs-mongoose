import { Router } from "express";
import { MessageModel, IMessage } from "../models/message";
import {Hash} from '../lib/bcrypt';
const routes = Router();

routes.get("/bcrypt/:email", async (req, res) => {
  try {
    const { email } = req.params;

    res.send(await Hash(email))
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;

import express from "express";
import { signup, forgetPassword } from "../controller.js";

const router = express.Router();

router.post("/user/signup", signup);
router.post("/user/forgetPassword", forgetPassword);

export { router };
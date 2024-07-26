import express from "express";
import { exiting } from "../controller/exit.controller.js";
const router = express.Router();

router.post("/exiting", exiting);

export default router;
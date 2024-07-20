import express from "express";
import { verifing } from "../controller/verify.controller.js";
const router = express.Router();

router.post("/verifing", verifing);

export default router;
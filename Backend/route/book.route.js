import express from "express";
import {booking } from "../controller/book.controller.js";
const router = express.Router();

router.post("/booking",booking);

export default router;
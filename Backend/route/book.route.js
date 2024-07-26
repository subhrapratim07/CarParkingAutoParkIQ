import express from "express";
import {booking,checkSlot } from "../controller/book.controller.js";
const router = express.Router();

router.post("/booking",booking);
router.get('/check-slot', checkSlot);

export default router;
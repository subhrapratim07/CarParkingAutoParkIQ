import express from "express";
import { getArea} from "../controller/area.controller.js";
const router=express.Router();
router.get("/",getArea);
export default router;
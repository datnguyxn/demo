import express from "express";
import HomeController from "../controllers/HomeController.controller.js";
const router = express.Router();

// router.use('/', HomeController.index);
router.get('/', HomeController.index);
export default router;
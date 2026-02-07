import express from "express";
import { paywayWebhook } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/webhook", paywayWebhook);

export default router;

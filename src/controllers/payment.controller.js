import { verifyPaywayWebhook } from "../services/payment.service.js";

export async function paywayWebhook(req, res) {
  try {
    const isValid = verifyPaywayWebhook(req.body);

    if (!isValid) {
      console.error("❌ Invalid PayWay signature", req.body);
      return res.status(400).send("INVALID");
    }

    const { tran_id, status } = req.body;

    if (status === "SUCCESS") {
      // update database here
      console.log("💰 Payment success:", tran_id);
    } else {
      console.log("⚠️ Payment status:", status, tran_id);
    }

    res.status(200).send("OK");
  } catch (err) {
    console.error("❌ Webhook error:", err);
    res.status(500).send("ERROR");
  }
}

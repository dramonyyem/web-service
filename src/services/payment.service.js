import crypto from "crypto";

export function verifyPaywayWebhook(payload) {
  // const { tran_id, status, amount, currency, hash } = payload;

  // const secretKey = process.env.PAYWAY_API_KEY;

  // const data = tran_id + amount + currency + status + secretKey;

  // const generatedHash = crypto.createHash("sha256").update(data).digest("hex");

  return payload;
}

import express from "express";
import dotenv from "dotenv";
import paymentRoute from "./routes/payment.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req,res) => {
  res.send("This is Web Service!!!");
});
app.use("/api", paymentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

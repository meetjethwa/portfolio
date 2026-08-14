import { Router } from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "..", "data", "messages.json");
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || "meetjethwa178@gmail.com";

const transporter = process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
  ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  : null;

const router = Router();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are all required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "That email address doesn't look valid." });
  }

  const entry = {
    name: String(name).trim().slice(0, 200),
    email: String(email).trim().slice(0, 200),
    message: String(message).trim().slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  try {
    let existing = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2));

    if (!transporter) {
      return res.status(503).json({
        error: "Email delivery is not configured on the server yet.",
      });
    }

    await transporter.sendMail({
      from: `Portfolio contact form <${process.env.GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: entry.email,
      subject: "New portfolio contact message",
      text: [
        `Name: ${entry.name}`,
        `Email: ${entry.email}`,
        "",
        "Message:",
        entry.message,
      ].join("\n"),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to process contact message:", err);
    return res.status(500).json({ error: "Something went wrong on the server." });
  }
});

export default router;

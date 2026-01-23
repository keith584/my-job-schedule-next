import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "id required" }, { status: 400 });
    }

    // 🚨 MATCH PHP EXACTLY (DO NOT base64-decode APP_KEY)
    const rawKey = process.env.APP_KEY;
    if (!rawKey) {
      throw new Error("APP_KEY not set");
    }

    // substr(Config::get('app.key'), 0, 16)
    const key = Buffer.from(rawKey).subarray(0, 16);

    // 16-byte IV
    const iv = crypto.randomBytes(16);

    // AES-128-CBC (RAW like OPENSSL_RAW_DATA)
    const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
    const encrypted = Buffer.concat([
      cipher.update(String(id), "utf8"),
      cipher.final()
    ]);

    // iv + encrypted
    const payload = Buffer.concat([iv, encrypted]);

    // base64 encode
    let base64 = payload.toString("base64");

    // URL-safe EXACT like PHP
    base64 = base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");

    return NextResponse.json({ encrypted: base64 });

  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
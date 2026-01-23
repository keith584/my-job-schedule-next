import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET() {
  const prices = await stripe.prices.list({
    expand: ["data.product"],
    active: true,
  });

  return NextResponse.json(prices.data);
}

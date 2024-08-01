import Stripe from "stripe";
import pkg from "../package.json";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Spotify Clone",
    version: pkg.version,
  },
});

import Stripe from "stripe";
import { version } from "../package.json";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-10-16",
  appInfo: {
    name: "Spotify Clone",
    version: version,
  },
});
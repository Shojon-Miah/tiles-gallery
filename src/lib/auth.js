import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// Lazy singleton — avoids top-level await and reuses the connection across
// hot-reloads in development (stored on the global object).
const globalForMongo = globalThis;

if (!globalForMongo._mongoClient) {
  globalForMongo._mongoClient = new MongoClient(process.env.MONGODB_URI);
}

const client = globalForMongo._mongoClient;

// We do NOT need to call await client.connect() here. The MongoClient will automatically
// connect to the database when the first operation is performed.
// This also avoids issues with top-level await in Next.js Route Handlers.
const db = client.db("tiles-gallery");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});

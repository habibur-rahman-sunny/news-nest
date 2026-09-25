
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URL);
const db = client.db("NewsNest");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

    emailAndPassword: { 
    enabled: true, 
  },

  // For Google Signin
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        },
        github: { 
            clientId:process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        },
    },

});


import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './config/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://neondb_owner:3cnLZOU7Pzol@ep-billowing-mountain-a5ux78vy.us-east-2.aws.neon.tech/neondb?sslmode=require",
    },
});
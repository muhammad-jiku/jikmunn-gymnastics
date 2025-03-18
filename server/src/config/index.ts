import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  email: {
    smtp_host: process.env.SMTP_HOST,
    smtp_port: process.env.SMTP_PORT,
    smtp_username: process.env.SMTP_USERNAME,
    smtp_password: process.env.SMTP_PASSWORD,
    smtp_sender: process.env.SMTP_SENDER, // Using the same email as sender
  },
};

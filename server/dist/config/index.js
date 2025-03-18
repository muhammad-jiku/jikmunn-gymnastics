"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
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

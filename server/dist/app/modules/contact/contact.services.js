"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const handleApiError_1 = __importDefault(require("../../../errors/handleApiError"));
const emailSender_1 = require("../../../helpers/emailSender");
const contactMail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, message, }) {
    if (!name) {
        throw new handleApiError_1.default(http_status_1.default.BAD_REQUEST, 'Your name is missing here!');
    }
    if (!email) {
        throw new handleApiError_1.default(http_status_1.default.BAD_REQUEST, 'Oops, You forget to provide your email address!');
    }
    if (!message) {
        throw new handleApiError_1.default(http_status_1.default.BAD_REQUEST, 'You forget to write your valuable words!');
    }
    const htmlContent = `
    <h2>Contact Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;
    yield emailSender_1.EmailHelper.sendEmail({
        email: config_1.default.email.smtp_username, // Recipient email address
        subject: 'GYM WEBSITE CONTACT',
        html: htmlContent,
    });
});
exports.ContactServices = {
    contactMail,
};

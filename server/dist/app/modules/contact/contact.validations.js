"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidations = void 0;
const zod_1 = require("zod");
const contactMail = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        message: zod_1.z.string({
            required_error: 'Message is required',
        }),
    })
        .strict(),
});
exports.ContactValidations = {
    contactMail,
};

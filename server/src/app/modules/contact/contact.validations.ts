import { z } from 'zod';

const contactMail = z.object({
  body: z
    .object({
      name: z.string({
        required_error: 'Name is required',
      }),
      email: z.string({
        required_error: 'Email is required',
      }),
      message: z.string({
        required_error: 'Message is required',
      }),
    })
    .strict(),
});

export const ContactValidations = {
  contactMail,
};

import httpStatus from 'http-status';
import config from '../../../config';
import ApiError from '../../../errors/handleApiError';
import { EmailHelper } from '../../../helpers/emailSender';
import { IMailServiceParams } from './contact.interfaces';

const contactMail = async ({
  name,
  email,
  message,
}: IMailServiceParams): Promise<void> => {
  if (!name || !email) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something went wrong!');
  }

  const htmlContent = `
    <h2>Contact Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  await EmailHelper.sendEmail({
    email: `${config.email.smtp_host}`, // Recipient email address
    subject: 'GYM WEBSITE CONTACT',
    html: htmlContent,
  });
};

export const ContactServices = {
  contactMail,
};

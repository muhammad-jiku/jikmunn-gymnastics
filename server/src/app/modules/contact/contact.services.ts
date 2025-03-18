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
  if (!name) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Your name is missing here!');
  }
  if (!email) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Oops, You forget to provide your email address!'
    );
  }
  if (!message) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'You forget to write your valuable words!'
    );
  }

  const htmlContent = `
    <h2>Contact Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  await EmailHelper.sendEmail({
    email: config.email.smtp_username as string, // Recipient email address
    subject: 'GYM WEBSITE CONTACT',
    html: htmlContent,
  });
};

export const ContactServices = {
  contactMail,
};

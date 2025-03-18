import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { ContactServices } from './contact.services';

const contactMail = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, message } = await req.body;

      await ContactServices.contactMail({ name, email, message });

      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Message Sent Successfully.',
      });
    } catch (error) {
      return next(error);
    }
  }
);

export const ContactControllers = {
  contactMail,
};

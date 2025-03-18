import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { ContactControllers } from './contact.controllers';
import { ContactValidations } from './contact.validations';

const router = express.Router();
router
  .route('/send')
  .post(
    validateRequest(ContactValidations.contactMail),
    ContactControllers.contactMail
  );

export const ContactRoutes = router;

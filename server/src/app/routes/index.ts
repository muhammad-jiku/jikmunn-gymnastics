import express from 'express';
import { ContactRoutes } from '../modules/contact/contact.routes';

const routes = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/contact',
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((r) => routes.use(r.path, r.route));
export default routes;

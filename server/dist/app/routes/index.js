"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_routes_1 = require("../modules/contact/contact.routes");
const routes = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/contact',
        route: contact_routes_1.ContactRoutes,
    },
];
moduleRoutes.forEach((r) => routes.use(r.path, r.route));
exports.default = routes;

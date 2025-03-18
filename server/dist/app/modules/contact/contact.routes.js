"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const contact_controllers_1 = require("./contact.controllers");
const contact_validations_1 = require("./contact.validations");
const router = express_1.default.Router();
router
    .route('/send')
    .post((0, validateRequest_1.validateRequest)(contact_validations_1.ContactValidations.contactMail), contact_controllers_1.ContactControllers.contactMail);
exports.ContactRoutes = router;

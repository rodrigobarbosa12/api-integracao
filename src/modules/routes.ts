import { Router } from 'express';
import login from './Controller/login';
import contacts from './Controller/contacts';

const routes = Router();

/**
 * Authentication
 */
routes.post('/signup', login.validateSignup, login.signup);
routes.post('/signin', login.validateSignin, login.signin);

/**
 * Contacts
 */
routes.post('/create-contacts', contacts.create);

export default routes;

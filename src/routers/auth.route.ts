import express, { Request, Response } from "express";
import authController from '../controllers/auth.controller'

const authRoute = express.Router();

authRoute.post('/register', authController.register);
authRoute.post('/login', authController.postLogin);

export default authRoute;
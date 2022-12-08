const {UserModel} = require('../schemas/user.model')
import {Request, Response} from 'express';

class AuthController {
    async register(req: Request, res: Response) {
        try {
            let user = req.body;
            let userId = await UserModel.findOne({email: req.body.email})
            if (userId == null) {
                let newUser = await UserModel.create(user);
                res.status(201).json({type: 'success', message: "Register Successfully"});
            } else {
                res.status(200).json({
                    type: 'exist',
                    message: "User already exists"
                });
            }
        } catch (error) {
            res.status(500).json('Server error');
        }
    }

    async postLogin(req: Request, res: Response) {
        try {
            const data: any = req.body;
            const user = await UserModel.findOne({email: data.email});
            if (user) {
                if (data.password === user.password) {
                    res.status(200).json({
                        type: 'success', data: {
                            message: 'Signed in successfully!',
                            data: user,
                        }
                    })
                } else {
                    res.status(200).json({type: 'error', message: 'Password is not correct!'});
                }
            } else {
                res.status(200).json({
                    type: 'notexist',
                    message: 'Account does not exist yet!',
                });
            }
        } catch (err) {
            res.status(500).json('Server error')
        }
    }
}

const authController = new AuthController();

export default authController;
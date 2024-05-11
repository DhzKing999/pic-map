import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../models/user-model";
import bcrypt from 'bcryptjs';
import { loginFormSchema } from "../../zodschema/authSchema/login-schema";
import { sendUserSessionCookie } from "../../utils/send-cookie";
import ErrorHandler from "../../middleware/error-handeler";


export const loginToAccount = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { email, password } = req.body;

        //zod verification of the data
        loginFormSchema.parse(req.body);

        //checking if there exists an email
        const user = await UserModel.findOne({ email });

        if (!user)
        {
            return next(new ErrorHandler(false, "Email Not Registered", 400));
        }

        //checking if the password is correct or not
        const isPasswordMatch = bcrypt.compareSync(password, user.password);

        if (!isPasswordMatch)
        {
            return next(new ErrorHandler(false, "Incorrect Password", 400));
        }

        // it will send the cookie to the user in response
        sendUserSessionCookie(user, res, `Welcome back, ${user.username}`, 200);

    } catch (error)
    {
        next(error);
    }
};

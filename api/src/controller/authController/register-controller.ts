import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../models/user-model";
import bcrypt from 'bcryptjs';
import { registerFormSchema } from "../../zodschema/authSchema/register-schema";
import ErrorHandler from "../../middleware/error-handeler";



export const registerAccount = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { username, email, password } = req.body;

        //zod validation
        registerFormSchema.parse(req.body);

        // Check if email is already registered
        const existingEmailUser = await UserModel.findOne({ email });
        if (existingEmailUser)
        {
            return next(new ErrorHandler(false, "Email already registered", 409));
        }

        // Check if username is already registered
        const existingUsernameUser = await UserModel.findOne({ username });
        if (existingUsernameUser)
        {
            return next(new ErrorHandler(false, "Username already registered", 409));
        }

        // Check if there is no superadmin in the entire database
        const superAdminCount = await UserModel.countDocuments({ role: 'superadmin' });
        let userRole = superAdminCount === 0 ? 'superadmin' : 'user';

        // Hashing the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create admin account with the determined role
        const createUser = await UserModel.create({
            username,
            email,
            password: hashedPassword,
            role: userRole
        });

        await createUser.save();

        // Send the email verification token to the user's email
        return res.json({ success: true, message: "Activation Link Sent to Your Mail" });

    } catch (error)
    {
        next(error);
    }
};
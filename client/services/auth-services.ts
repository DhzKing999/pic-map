import axios from "axios"
import { Alert } from "react-native"

const baseUrl = 'http://192.168.1.80:4000/api/v1'


export const login = async ({ email, password }: { email: string, password: string }) =>
{
    try
    {
        const response = await fetch(`${baseUrl}/loginToAccount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok)
        {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error)
    {
        return error;
    }
};

export const Register = async ({ username, email, password }: { username: string, email: string, password: string }) =>
{
    try
    {
        const response = await fetch(`${baseUrl}/registerAccount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok)
        {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Registration failed');
        }
        const data = await response.json();
        return data;
    } catch (error: any)
    {
        return { error: error.message };
    }
};
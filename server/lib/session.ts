import type { IronSessionOptions } from 'iron-session'

export type CurrentUser = {
    isLoggedIn: boolean;
    userId: number;
    accessCode: string;
}

export const sessionOptions: IronSessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: 'auth-session',
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
    interface IronSessionData {
        user?: CurrentUser
    }
}
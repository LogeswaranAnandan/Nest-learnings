import { Request, Response } from "express";

const loggerMiddleware = (req: Request, res: Response, next: () => void) => {
    console.log('Inside Logger ===> ', req.url);
    next();
}

// Export.
export { loggerMiddleware };
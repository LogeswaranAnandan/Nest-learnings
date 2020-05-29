import { Request, Response } from "express";

const loggerMiddleware = (req: Request, res: Response, next: () => void) => {
    console.log('Inside :: Logger');
    next();
}

// Export.
export { loggerMiddleware };
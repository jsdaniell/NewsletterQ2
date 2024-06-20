import { rateLimit } from "express-rate-limit";

const rateLimitMiddleware = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5,
    message: {
        status: 429,
        message: "Too many requests"
    }
});

export default rateLimitMiddleware;
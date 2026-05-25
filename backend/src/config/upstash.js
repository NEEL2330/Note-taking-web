import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

// Check if Upstash credentials are available
const hasUpstashCredentials = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

let ratelimit;

if (hasUpstashCredentials) {
    // Create a ratelimiter that allows 5 requests per 20 seconds
    ratelimit = new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, "20 s"),
    });
} else {
    // Fallback: Simple in-memory rate limiter for local development
    console.log("⚠️  Upstash Redis credentials not found. Using in-memory rate limiter for local development.");
    
    const requestCounts = new Map();
    const WINDOW_SIZE = 20 * 1000; // 20 seconds in milliseconds
    const MAX_REQUESTS = 5;
    
    ratelimit = {
        limit: async (identifier) => {
            const now = Date.now();
            const windowStart = now - WINDOW_SIZE;
            
            // Clean up old entries
            for (const [key, data] of requestCounts.entries()) {
                if (data.timestamp < windowStart) {
                    requestCounts.delete(key);
                }
            }
            
            // Get or create entry for this identifier
            const entry = requestCounts.get(identifier) || { count: 0, timestamp: now };
            
            // Reset count if window has passed
            if (now - entry.timestamp > WINDOW_SIZE) {
                entry.count = 0;
                entry.timestamp = now;
            }
            
            // Check if limit exceeded
            if (entry.count >= MAX_REQUESTS) {
                requestCounts.set(identifier, entry);
                return { success: false };
            }
            
            // Increment count
            entry.count++;
            requestCounts.set(identifier, entry);
            
            return { success: true };
        }
    };
}

export default ratelimit;
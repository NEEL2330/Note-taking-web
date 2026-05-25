import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit"); // ✅ per-IP rate limit

    if (!success) {
      return res.status(429).json({ message: "Too many requests. Try again later." });
    }

    next();
  } catch (error) {
    console.log("Rate limit error:", error);
    return res.status(500).json({ message: "Rate limiter failed" });
  }
};

export default rateLimiter;

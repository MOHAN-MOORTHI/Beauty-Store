import express from "express"; // import express
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import authRoute from "./Routes/auth.route.js";
import productRoute from "./Routes/product.route.js";

const app = express();

//cors
app.use(cors());

// json body
app.use(express.json());

// cookieParser
app.use(cookieParser());

// Routes
app.use("api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute)

// Error Middleware
app.use(errorHandler);
app.use(notFound);

export default app;

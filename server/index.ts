import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import requestRoutes from "./routes/requestRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction): void => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }
  next();
});

app.use(helmet());

app.use("/api", requestRoutes);

app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

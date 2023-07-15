import exports, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const app = exports();

app.get("/", (req: Request, res: Response) => {
  return "test";
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

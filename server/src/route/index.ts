import { Request, Response } from "express";
import * as express from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hello guys from v1");
});
export default router;

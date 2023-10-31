import { AppDataSource } from "./data-source";
import * as express from "express";
import { Request, Response } from "express";
import bodyParser = require("body-parser");
import * as cors from "cors";
import router from "./route";

require("dotenv").config();

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;
    // const cors = require('cors')

    // app.use(cookieParser())
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(express.json());
    app.use("/api/v1", router);

    app.get("/", (req: Request, res: Response) => {
      res.send("I Love You Nurul Kriswati!");
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
